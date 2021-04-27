
const products = require("./v1/products");
const auth = require("./v1/auth");

module.exports = (app) => {
  app.use("/v1/products", products);
  app.use("/v1/auth", auth);
};
