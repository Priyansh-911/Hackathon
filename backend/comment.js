const express = require("express");
const commentDB = require("./db/commentsDB");
require("./db/commentConfig");


const app = express();

app.post("/dashboard/student", async (req,res)=>{
    res.status(200).send("progress");
    let user = new commentDB(req.body);
    let result = user.save();
});