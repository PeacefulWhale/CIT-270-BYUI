const express = require("express");
const bodyParser = require("body-parser")
const { v4: uuidv4 } = require('uuid');
const path = require("path");
const port = 3333;
const app = express();

app.use(bodyParser.json())

app.listen(port, async ()=>{
    console.log("Listening on port " + port);
});

app.get("/", (req, res) =>{
    res.send("Hello World!");
    console.log("User Connected");
});

app.get("/secret", (req, res) =>{
    res.send("Is this how it handles users heading to other pages?");
    console.log("User Connected to 'Secret'");
});

app.get("/login", (req, res) =>{
    res.sendFile(path.join(__dirname, '/html/login.html'));
});

app.post("/login", (req, res) =>{
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
