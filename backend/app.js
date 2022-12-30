const express = require("express");
require('./db/config');
const user = require("./db/users");
const app = express();


app.post("/register", async (req,res)=>{
    let user = new user(req.body)
    let result = await user.save();
    res.send(result);
})

app.listen(5000);


