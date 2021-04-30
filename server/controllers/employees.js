const errorHandler = require("../middlewares/errorHandler");
const asyncHandler = require("../middlewares/async");
const MongoClient = require('mongodb').MongoClient;
const { ObjectId } = require('mongodb');
const random = require('random');
let EmployeeModel = require("../models/Employee.js");

const dbName = "grocers";
const uri =  'mongodb://localhost:27017/grocers';

exports.getAllEmployees = asyncHandler(async (req, res, next) => {
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    try {
      await client.connect();
      const result = await client.db(dbName).collection("employees").find().toArray();
      res.send(result);
    } catch (err) {
      console.log(err.stack);
      errorHandler(err);
    } finally {
      await client.close();
    }
  });
  
  exports.getEmployee = asyncHandler(async (req, res, next) => {
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    try {
      await client.connect();
      const result = await client.db(dbName).collection("employees").findOne({id: req.query.id});
      res.send(result);
    } catch (err) {
      console.log(err.stack);
      errorHandler(err);
    } finally {
      await client.close();
    }
  });
  
  exports.addEmployee = asyncHandler(async (req, res, next) => {
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    try {
      await client.connect();
      const id = random.int((min = 0), (max = 99 * 99))
      const result = await client.db(dbName).collection("employees").insertOne({...req.body, id});
      res.send(result);
    } catch (err) {
      console.log(err.stack);
      errorHandler(err);
    } finally {
      await client.close();
    }
  });
  
  exports.updateEmployee = asyncHandler(async (req, res, next) => {
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    try {
      await client.connect();
      const employee = req.body;
      delete employee._id;
      const result = await client.db(dbName).collection("employees").findOneAndUpdate({ id: employee.id }, { $set: employee });
      res.send(result);
    } catch (err) {
      console.log(err.stack);
      errorHandler(err);
    } finally {
      await client.close();
    }
  });
  
  exports.deleteEmployee = asyncHandler(async (req, res, next) => {
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

  exports.getEmployeeByEmail = asyncHandler(async (req, res, next) => {
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    try {
      await client.connect();
      const result = await client.db(dbName).collection("employees").findOne({email: req.query.email});
      res.send(result);
    } catch (err) {
      console.log(err.stack);
      errorHandler(err);
    } finally {
      await client.close();
    }
  });
 
exports.getAllEmployees =(req,res)=> {

  EmployeeModel.find({},(err,result)=> {
      if(!err){
          res.json(result);
      }
  })

}
    