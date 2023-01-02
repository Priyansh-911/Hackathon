const express = require("express");
require('./db/config');
const users = require("./db/users");
const scholarships  = require("./db/scholarships");
const app = express();
app.use(express.json());

app.post("/register", async (req,res)=>{
  res.send("progress")
    // let user = new user(req.body);
    // let result = await users.save();
    // console.log("run");
    // res.send(result);
})

// app.get("/scholarships/get", (req, res) => {
//     Products.find((err, data) => {
//       if (err) {
//         res.status(500).send(err);
//       } else {
//         res.status(200).send(data);
//       }
//     });
//   });
//ABC
app.listen(3000);


