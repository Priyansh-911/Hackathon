const express = require("express");
const cors = require("cors");
require('./db/config');
const Users = require("./db/users");
const scholarships  = require("./db/scholarships");
const app = express();

app.use(express.json());
app.use(cors());

app.get("/" , (req,res)=>{
    res.status(200).send("up and running...");
});


// app.get("/register", async (req,res)=>{
//     res.status(200).send("this is get...");
// });



app.post("/register", async (req,res)=>{
    res.status(200).send("progress");
    let user = new Users(req.body);
    let result = user.save();
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

app.listen(3000);


