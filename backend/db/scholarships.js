const mongoose = require("mongoose");

mongoose.set('strictQuery', false);


// this is a sample schema
// Note to lakshay == isko apni table ke hisaab se edit krlio theseee things should match the ones in table
var Schema= mongoose.Schema;
const scholarshipsSchema = new Schema({
    name : String,
    gender : String,
    state : String,
    eligible: String,
    amount: String,
   
    
})


module.exports = mongoose.model("scholarships", scholarshipsSchema) //here add the name of table in the invertedcommas

