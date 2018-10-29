const mongoose = require('mongoose');
//import mongoose from "mongoose/browser";
 const Schema = mongoose.Schema;

 const studentsSchema = new Schema({
    name: String,
    mobile: Number,
    degree: String,
    college: String,
    department: String,
    message: String
 })

module.exports = mongoose.model('student',studentsSchema,'students');