
const products = require("./v1/products");
const auth = require("./v1/auth");
const orders = require("./v1/orders");
const admin = require("./v1/admin");
const employee = require("./v1/employees");
const tickets=require("./v1/tickets");
const requests=require("./v1/requests");
const { request } = require("express");

module.exports = (app) => {
  app.use("/v1/products", products);
  app.use("/v1/auth", auth);
  app.use("/v1/orders", orders);
  app.use("/v1/admin", admin);
  app.use("/v1/employees", employee);
  app.use("/v1/tickets",tickets);
  app.use("/v1/requests",requests);

};
