const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const EmployeeSchema = new Schema({
    firstName:String,
    lastName:String,
    email:String,
    phoneNumber:String,
    _id:number,
    password:String
});

module.exports = mongoose.model("Employees", EmployeeSchema);
