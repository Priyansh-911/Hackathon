const mongoose = require("mongoose");


// this is a sample schema
// Note to lakshay == isko apni table ke hisaab se edit krlio thesee things should match the ones in table
const userSchema = new mongoose.schema({
    name : String,
    DOB : Date,
    placeOforigin : String,
    std10 : Number,
    std12 : Number,
    current : String,
    gender : String,
})


module.exports = mongoose.model("nameOfTable", userSchema) //here add the name of table in the invertedcommas

