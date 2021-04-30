const mongoose = require("mongoose");
const Schema = mongoose.Schema;
mongoose.Promise = global.Promise;

const EmployeeSchema = new Schema({
    firstName:String,
    lastName:String,
    email:String,
    phoneNumber:String,
    id:Number,
    password:String
});

module.exports = mongoose.model("Employees", EmployeeSchema);