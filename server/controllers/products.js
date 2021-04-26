const errorHandler = require("../middlewares/errorHandler");
const asyncHandler = require("../middlewares/async");
const MongoClient = require('mongodb').MongoClient;
const { ObjectId } = require('mongodb');
const random = require('random');

const dbName = "grocers";
const uri =  'mongodb://localhost:27017/grocers';

exports.getAllProducts = asyncHandler(async (req, res, next) => {
  const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
  try {
    await client.connect();
    const result = await client.db(dbName).collection("products").find().toArray();
    res.send(result);
  } catch (err) {
    console.log(err.stack);
    errorHandler(err);
  } finally {
    await client.close();
  }
});

exports.getProduct = asyncHandler(async (req, res, next) => {
  const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
  try {
    await client.connect();
    const result = await client.db(dbName).collection("products").findOne({id: req.query.id});
    res.send(result);
  } catch (err) {
    console.log(err.stack);
    errorHandler(err);
  } finally {
    await client.close();
  }
});

exports.addProduct = asyncHandler(async (req, res, next) => {
  const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
  try {
    await client.connect();
    const id = random.int((min = 0), (max = 99 * 99))
    const result = await client.db(dbName).collection("products").insertOne({...req.body, id});
    res.send(result);
  } catch (err) {
    console.log(err.stack);
    errorHandler(err);
  } finally {
    await client.close();
  }
});

exports.updateProduct = asyncHandler(async (req, res, next) => {
  const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
  try {
    await client.connect();
    const product = req.body;
    delete product._id;
    const result = await client.db(dbName).collection("products").findOneAndUpdate({ id: product.id }, { $set: product });
    res.send(result);
  } catch (err) {
    console.log(err.stack);
    errorHandler(err);
  } finally {
    await client.close();
  }
});

exports.deleteProduct = asyncHandler(async (req, res, next) => {
  const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
  try {
    await client.connect();
    console.log('-->>>', req.query.id);
    const result = await client.db(dbName).collection("products").deleteOne({ _id: ObjectId(req.query.id) });
    res.send(result);
  } catch (err) {
    console.log(err.stack);
    errorHandler(err);
  } finally {
    await client.close();
  }
});
