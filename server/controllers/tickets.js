const errorHandler = require("../middlewares/errorHandler");
const asyncHandler = require("../middlewares/async");
const MongoClient = require('mongodb').MongoClient;
const { ObjectId } = require('mongodb');
const random = require('random');

const dbName = "grocers";
const uri =  'mongodb://localhost:27017/grocers';



exports.getalltickets = asyncHandler(async (req, res, next) => {
  const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
  try {
    await client.connect();
    const result = await client.db(dbName).collection("Tickets").find().toArray();
    res.send(result);
  } catch (err) {
    console.log(err.stack);
    errorHandler(err);
  } finally {
    await client.close();
  }
});



exports.createticket = asyncHandler(async (req, res, next) => {
  console.log("hello Order");
  const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
  try {
    await client.connect();
    const id = random.int((min = 0), (max = 99 * 99))
    const result = await client.db(dbName).collection("Tickets").insertOne({...req.body, id});
    res.send(result);
  } catch (err) {
    console.log(err.stack);
    errorHandler(err);
  } finally {
    await client.close();
  }
});



