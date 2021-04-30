const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TicketsSchema = new Schema({
  id: String,
  userName: String,
  email: String,
  reason: String,
  ticketDate: String,

});

module.exports = mongoose.model("Tickets", TicketsSchema);
