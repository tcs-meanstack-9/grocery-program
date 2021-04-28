const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const EmployeeSchema = new Schema({
    firstName:String,
    lastName:String,
    email:String,
    phoneNumber:String,
    id:Number,
    password:String,
    dateOfBirth:String,
    address:String
});

module.exports = mongoose.model("Employees", EmployeeSchema);