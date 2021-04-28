const errorHandler = require("../middlewares/errorHandler");
const asyncHandler = require("../middlewares/async");
const MongoClient = require('mongodb').MongoClient;
const { ObjectId } = require('mongodb');
const random = require('random');

const dbName = "grocers";
const uri =  'mongodb://localhost:27017/grocers';



exports.getAllOrders = asyncHandler(async (req, res, next) => {
  const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
  try {
    await client.connect();
    const result = await client.db(dbName).collection("Orders").find().toArray();
    res.send(result);
  } catch (err) {
    console.log(err.stack);
    errorHandler(err);
  } finally {
    await client.close();
  }
});

exports.getorder = asyncHandler(async (req, res, next) => {
  const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
  console.log(req.query.userId);
 
  try {
    await client.connect();
    const result = await client.db(dbName).collection("Orders").find({userId: req.query.userId}).toArray();
    res.send(result);
  } catch (err) {
    console.log(err.stack);
    errorHandler(err);
  } finally {
    await client.close();
  }
});

exports.createOrder = asyncHandler(async (req, res, next) => {
  console.log("hello Order");
  const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
  try {
    await client.connect();
    const id = random.int((min = 0), (max = 99 * 99))
    const result = await client.db(dbName).collection("Orders").insertOne({...req.body, id});
    res.send(result);
  } catch (err) {
    console.log(err.stack);
    errorHandler(err);
  } finally {
    await client.close();
  }
});

exports.update = asyncHandler(async (req, res, next) => {
  const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
  try {
    await client.connect();
    const order = req.body;
    delete order._id;
    const result = await client.db(dbName).collection("Orders").findOneAndUpdate({ id: order.id }, { $set: order });
    res.send(result);
  } catch (err) {
    console.log(err.stack);
    errorHandler(err);
  } finally {
    await client.close();
  }
});

exports.deletetorder = asyncHandler(async (req, res, next) => {
  const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
  try {
    await client.connect();
    console.log('-->>>', req.query.id);
    const result = await client.db(dbName).collection("Orders").deleteOne({ _id: ObjectId(req.query.id) });
    res.send(result);
  } catch (err) {
    console.log(err.stack);
    errorHandler(err);
  } finally {
    await client.close();
  }
});

