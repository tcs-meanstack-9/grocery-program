const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const OrdersSchema = new Schema({
  id: String,
  userId:Number,
  orderDate :Date,
  orderAmount :Number,
  products :{
    id: String,
    name: String,
    description: String,
    price: String,
    image: String,
    quantity: String,
  },
});

module.exports = mongoose.model("Orders", OrdersSchema);
