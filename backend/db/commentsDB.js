const mongoose = require("mongoose");


// this is a sample schema
// Note to lakshay == isko apni table ke hisaab se edit krlio theseee things should match the ones in table
var Schema= mongoose.Schema;
const commentSchema = new Schema({
    comment:String
});


module.exports = mongoose.model("comment", commentSchema) //here add the name of table in the invertedcommas

