const mongoose = require("mongoose");

    mongoose.connect('mongodb://localhost:27017/hackathon');



// this is a sample schema
// Note to lakshay == isko apni table ke hisaab se edit krlio theseee things should match the ones in table
const userSchema = new mongoose.schema({
    name : String,
    email : String,
    gender : String,
    DOB : Date,
    state : String,
    std10 : Number,
    std12 : Number,
    current : String,
    currented : String
    
})


module.exports = mongoose.model("users", userSchema) //here add the name of table in the invertedcommas

