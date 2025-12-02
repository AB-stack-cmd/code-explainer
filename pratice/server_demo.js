const express = require("express");

const app = express();


// get is the method from client side and req is the data fetch from the client 
// res is the response sends the data 
app.get("/get/notes", (req, res) => {
    console.log(req.url)
    // console.log(req.ip)
    res.send("hello from server 1");
});

app.listen(8888, () => {
    console.log("hello")
});