const express = require("express");
require('./db/config');
const user = require("./db/users");
const scholarship  = require("./db/scholarships");
const app = express();
app.use(express.json());

app.post("/register", async (req,res)=>{
    let user = new user(req.body);
    let result = await user.save();
    res.send(result);
})

app.get("/scholarships/get", (req, res) => {
    Products.find((err, data) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.status(200).send(data);
      }
    });
  });

app.listen(5000);


