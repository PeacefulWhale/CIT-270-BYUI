const express = require("express");
const bodyParser = require("body-parser")
const { v4: uuidv4 } = require('uuid');
const path = require("path");
const redis = require("redis");
const crypto = require("crypto");
const { Console } = require("console");
const not_so_secret_key = "WaffleIron";

// Express App.
const port = 3333;
const app = express();
app.use(bodyParser.json())

// Redis Stuff.
const client = redis.createClient(6379);

client.on('error', err => {
    console.log(err);
});

// App functions.
app.listen(port, async () => {
    await client.connect();
    // This is me testing the redis connection...
    await client.set("testKey", "Hello World!", function (err, reply) {
        console.log(reply);
        console.log(err);
    });
    console.log("Listening on port " + port);
});

app.get("/redis-test", async (req, res) => {
    const testKey = await client.get("testKey");
    const hashedKey = crypto.createHash("sha512", not_so_secret_key).update(testKey).digest("hex");
    console.log("Key: " + testKey + '\n' + "Hash: " + hashedKey);
    res.send("Key: " + testKey + '\n' + "Hash: " + hashedKey);
});

app.get("/", async (req, res) => {
    res.send("Hello World!");
    console.log("User Connected");
});

app.get("/secret", async (req, res) => {
    res.send("Is this how it handles users heading to other pages?");
    console.log("User Connected to 'Secret'");
});

app.get("/login", async (req, res) => {
    res.sendFile(path.join(__dirname, '/html/login.html'));
});

app.post("/login", async (req, res) => {
    // I'm sure that this is very secure...
    console.log("User Logging In:")
    console.log(JSON.stringify(req.body));
    // Parse input.
    var loginEmail;
    try {
        loginEmail = req.body.email;
    }
    catch (err) {
        res.send("Could not parse email.");
        console.log(err);
    }
    console.log("Login Email: ", loginEmail);
    var loginPassword;
    try {
        loginPassword = req.body.password;
    }
    catch (err) {
        res.send("Could not parse password");
        console.log(err);
    }
    console.log("Login Password: ", loginPassword);
    try {
        if (req.body.userName == "username" && req.body.password == "password") {
            res.send("Wow... Your information is *really* insecure!\nNo token for you!");
        }
        else {
            if (await client.hExists("users", loginEmail)) {
                console.log("User exists...");
                const userData = JSON.parse(await client.hGet('users', loginEmail));
                if (loginPassword === userData.password) {
                    console.log("User gave correct password.");
                    const token = uuidv4();
                    res.send("Congratulations on logging in!\n Here's your token: " + token);
                }
                else {
                    console.log("Incorrect password...");
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
    }
    catch (err) {
        res.send("Sorry, but something went wrong!");
        console.log(err);
    }
});

app.post("/user", async (req, res) => {
    const new_user = JSON.stringify(req.body);
    try {
        console.log("New User: " + new_user + "Email: " + req.body.email);
        // TODO: Add actual logic so this doesn't just try to write everything every time.
        // I'll have to use client.hGet or client.hExists probably.
        if (await client.hExists("users", req.body.email)) {
            res.send("User cannot be registered, email already in use!");
        }
        else {
            await client.hSet("users", req.body.email, new_user);
            res.send("User registered! Hopefully you didn't overwrite anyone!");
        }
    }
    catch (err) {
        res.send("Could not parse input.");
        console.log(err)
    }
});
