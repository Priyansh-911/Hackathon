const mongoose = require("mongoose");


// this is a sample schema
var Schema= mongoose.Schema;
const commentSchema = new Schema({
    comment : String,
});


module.exports = mongoose.model("comment", commentSchema); //here add the name of table in the invertedcommas

