const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const RequestsSchema = new Schema({
  id: String,
  empName: String,
  message: String,
  requestDate: String,

});

module.exports = mongoose.model("Requests", RequestsSchema);
