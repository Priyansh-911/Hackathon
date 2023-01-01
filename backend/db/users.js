const mongoose = require("mongoose");




mongoose.set('strictQuery', false);

// this is a sample schema
// Note to lakshay == isko apni table ke hisaab se edit krlio theseee things should match the ones in table
var Schema= mongoose.Schema;
const userSchema = new Schema({
    name : String,
    email : String,
    gender : String,
    
    state : String,
    choice : String,
    password : String
    
})


module.exports = mongoose.model("users", userSchema) //here add the name of table in the invertedcommas

