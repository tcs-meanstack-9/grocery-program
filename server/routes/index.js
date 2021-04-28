
const products = require("./v1/products");
const auth = require("./v1/auth");
const orders=require("./v1/orders");

module.exports = (app) => {
  app.use("/v1/products", products);
  app.use("/v1/auth", auth);
  app.use("/v1/orders",orders);
};
