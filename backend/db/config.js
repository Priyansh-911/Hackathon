// this file should contain the path which would connect the database with api

const mongoose = require('mongoose');
mongoose.set('strictQuery', false); 
mongoose.connect("mongodb://0.0.0.0:27017/hackathon");