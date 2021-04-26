const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
  id: String,
  name: String,
  description: String,
  price: String,
  image: String,
  quantity: String,
});

module.exports = mongoose.model("Products", ProductSchema);
