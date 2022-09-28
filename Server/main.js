const express = require("express");
const bodyParser = require("body-parser")
const { v4: uuidv4 } = require('uuid');
const path = require("path");
const redis = require("redis");
const crypto = require("crypto");
const not_so_secret_key = "WaffleIron";

// Express App.
const port = 3333;
const app = express();
app.use(bodyParser.json())

// Redis Stuff.
const client = redis.createClient(6379);

client.on('error', err => {
    console.log('Error ' + err);
});

// App functions.
app.listen(port, async ()=>{
    await client.connect();
    // This is me testing the redis connection...
    await client.set("testKey", "Hello World!", function(err, reply) {
        console.log(reply);
    });
    console.log("Listening on port " + port);
});

app.get("/redis-test", async(req, res) =>{
    const testKey = await client.get("testKey");
    const hashedKey = crypto.createHash("sha512", not_so_secret_key).update(testKey).digest("hex");
    console.log("Key: " + testKey + '\n' + "Hash: " + hashedKey);
    res.send("Key: " + testKey + '\n' + "Hash: " + hashedKey);
});

app.get("/", async(req, res) =>{
    res.send("Hello World!");
    console.log("User Connected");
});

app.get("/secret", async(req, res) =>{
    res.send("Is this how it handles users heading to other pages?");
    console.log("User Connected to 'Secret'");
});

app.get("/login", async(req, res) =>{
    res.sendFile(path.join(__dirname, '/html/login.html'));
});

app.post("/login", async(req, res) =>{
    // I'm sure that this is very secure...
    console.log("User Logging In:")
    console.log(JSON.stringify(req.body));
    const loginEmail = req.body.userName;
    console.log("Login Email: ", loginEmail);
    const loginPassword = req.body.password;
    console.log("Login Password: ", loginPassword);

    if (req.body.userName == "username" && req.body.password == "password"){
        res.send("Wow... Your information is *really* insecure!\nNo token for you!");
    }
    else
    {
        const token = uuidv4();
        res.send("Token: " + token);
    }
});
