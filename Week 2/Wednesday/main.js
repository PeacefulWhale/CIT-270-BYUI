const express = require("express");
const port = 3333;
const app = express();

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
