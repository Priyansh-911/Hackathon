const mongoose = require("mongoose");


// this is a sample schema
var Schema= mongoose.Schema;
const userSchema = new Schema({
    name: String,
    email: String,
    gender: String,
    state: String,
    choice: String,
    password:String
});


module.exports = mongoose.model("users", userSchema) //here add the name of table in the invertedcommas

