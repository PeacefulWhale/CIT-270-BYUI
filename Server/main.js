const express = require("express");
const bodyParser = require("body-parser")
const { v4: uuidv4 } = require('uuid');
const path = require("path");
const redis = require("redis");
const crypto = require("crypto");
const { Console } = require("console");
const not_so_secret_key = "WaffleIron";
// HTTPS Refactor stuff...
const fs = require("fs");
const http = require("http");
const https = require("https");

// Express App.
const baseurl = "https://peacefulwhale.cit270.com";
const httpPort = 80;
const httpsPort = 443;
const app = express();
app.use(bodyParser.json())
// public folder thingy.
app.use(express.static(path.join(__dirname, "public")))

// HTTP/HTTPS stuff
const privateKey  = fs.readFileSync("./SSL/server.key", "utf8");
const certificate = fs.readFileSync("./SSL/server.crt", "utf8");
const chain = fs.readFileSync("./SSL/server.chain", "utf-8");
const credentials = {key: privateKey, cert: certificate, ca: chain};
const httpsServer = https.createServer(credentials, app);

// Redis Stuff.
const redisPass = process.env.REDIS_PASS;
const redisConnection = "redis://default:" + redisPass + "@redis-pw:6379";
const client = redis.createClient(
    {
        url: redisConnection
    }
);

client.on('error', err => {
    console.log(err);
});

// Simple HTTP server that just redirects stuff.
const httpApp = express();
const httpServer = http.createServer(httpApp);
httpServer.listen(httpPort, async () => {
    // await client.connect();
    console.log("HTTP Server listening on port " + httpPort);
});
httpApp.all("*", async (req, res) => {
    // Hardcoding the base URL is a *great* idea... The only problem is on my docker container this will break XD
    // But as I'm running everything on my VM right now, this doesn't really matter I guess.
    res.redirect(301, baseurl + req.url);
});

// HTTPS Server Listen.
httpsServer.listen(httpsPort, async () => {
    console.log("Connecting to: ", redisConnection);
    await client.connect();
    console.log("HTTPS Server listening on port " + httpsPort);
});

// Actual app stuff.
app.get("/", async (req, res) => {
    res.send("Hello World!");
    console.log("User Connected");
});

app.post("/user", async (req, res) => {
    console.log("User registering");
    try {
        // Make sure that the password and verifyPassword match.
        if (req.body.password != req.body.verifyPassword) {
            console.log("New user passwords do not match.");
            res.send("Passwords do not match! Sorry!");
        }
        else {
            req.body.password = crypto.createHash("sha512", not_so_secret_key).update(req.body.password).digest("hex");
            const new_user = JSON.stringify(req.body);
            if (await client.hExists("users", req.body.email)) {
                console.log("User gave duplicate email.");
                res.send("User cannot be registered, email already in use!");
            }
            else {
                await client.hSet("users", req.body.email, new_user);
                console.log("User registered.");
                res.send("You're registered! Have fun I guess...");
            }
        }
        // Hash the password.
    }
    catch (err) {
        res.send("Something went wrong, sorry ;_;");
        console.log(err)
    }
});


app.get("/login", async (req, res) => {
    res.sendFile(path.join(__dirname, '/html/login.html'));
});

// LOCK OUT LOGIC
const lockOutCount = 3;
const lockOutTime = 300;

app.post("/login", async (req, res) => {
    // I'm sure that this is very secure...
    console.log("User logging in.")
    // Parse input.
    var loginEmail;
    try {
        loginEmail = req.body.email;
    }
    catch (err) {
        res.send("Could not parse email.");
        console.log(err);
    }
    var loginPassword;
    try {
        loginPassword = crypto.createHash("sha512", not_so_secret_key).update(req.body.password).digest("hex");
    }
    catch (err) {
        res.send("Could not parse password");
        console.log(err);
    }
    try {
        if (await client.hExists("users", loginEmail)) {
            console.log("User exists...");
            var userData = JSON.parse(await client.hGet("users", loginEmail));
            var lockOuts = parseInt(await client.hGet("lockOutCount", loginEmail));
            var lockTime = parseInt(await client.hGet("lockOutTime", loginEmail));
            var currentTime = Math.floor(new Date().getTime() / 1000);
            console.log("lockOuts: ", lockOuts);
            console.log("lockTime: ", lockTime);
            console.log("currentTime: ", currentTime); 
            // Locked out.
            if (lockOuts > lockOutCount)
            {
                // Enough time has passed.
                if (currentTime > lockTime + lockOutTime)
                {
                    await client.hSet("lockOutCount", loginEmail, "0");
                }
                else
                {
                    console.log("User locked out for ", String((lockTime + lockOutTime) - currentTime), " seconds");
                    res.send("Sorry, but you are locked out for " + String((lockTime + lockOutTime) - currentTime) + " seconds");
                    // Do not continue.
                    return -1;
                }
            }
            // If they got here, then enough time has passed for them to try to log in again.
            if (loginPassword === userData.password) {
                console.log("User gave correct password.");
                const token = uuidv4();
                await client.hSet("lockOutCount", loginEmail, "0");
                res.send("Congratulations on logging in!\n Here's your token: " + token);
            }
            else {
                console.log("Incorrect password...");
                // Increase the lockOutCount.
                await client.hSet("lockOutCount", loginEmail, String(lockOuts + 1));
                // Update the lockOutTime.
                await client.hSet("lockOutTime", loginEmail, String(currentTime));
                res.status(403);
                res.send("That's not the right password!");
            }
        }
        else {
            console.log("Could not find username.")
            res.status(404);
            res.send("We couldn't find your username!");
        }
    }
    catch (err) {
        res.send("Sorry, but something went wrong!");
        console.log(err);
    }
});
