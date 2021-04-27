let mongoose = require("mongoose");

let schema = mongoose.Schema;

let postSchema = new mongoose.Schema({
    user: {type:mongoose.Schema.Types.ObjectId , ref: "user"},
    createdAt: {type:Date, default:Date.now()}
});

module.exports = mongoose.model("post", postSchema);