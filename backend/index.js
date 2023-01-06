const express = require("express");
const cors = require("cors");
require("./db/config");
const Users = require("./db/users");
const scholarships = require("./db/scholarships");
const commentDB = require("./db/commentsDB");

const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.status(200).send("up and running...");
});

app.get("/register", async (req, res) => {
  res.status(200).send("this is get...");
});

app.post("/register", async (req, res) => {
  res.status(200).send("progress");
  let user = new Users(req.body);
  let result = user.save();
});

app.get("/dashboard" , async (req,res)=> {
    res.status(200).send("Running");
});

app.post("/dashboard/student", async (req, res) => {
  // res.status(200).send("progress......");
  let comment = new commentDB(req.body);
  let resultss = comment.save();
  console.log(resultss);
});

// app.get("/scholarships", (req, res) => {
//     Products.find((err, data) => {
//       if (err) {
//         res.status(500).send(err);
//       } else {
//         res.status(200).send(data);
//       }
//     });
//   });

app.listen(4500);
