const errorHandler = require("../middlewares/errorHandler");
const asyncHandler = require("../middlewares/async");
const MongoClient = require('mongodb').MongoClient;
const { ObjectId } = require('mongodb');
const random = require('random');

const dbName = "grocers";
const uri =  'mongodb://localhost:27017/grocers';



exports.getallrequests = asyncHandler(async (req, res, next) => {
  const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
  try {
    await client.connect();
    const result = await client.db(dbName).collection("Requests").find().toArray();
    res.send(result);
  } catch (err) {
    console.log(err.stack);
    errorHandler(err);
  } finally {
    await client.close();
  }
});



exports.createrequest = asyncHandler(async (req, res, next) => {
 
  const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
  try {
    await client.connect();
    const id = random.int((min = 0), (max = 99 * 99))
    const result = await client.db(dbName).collection("Requests").insertOne({...req.body, id});
    res.send(result);
  } catch (err) {
    console.log(err.stack);
    errorHandler(err);
  } finally {
    await client.close();
  }
});



