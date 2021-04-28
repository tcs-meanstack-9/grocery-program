
const products = require("./v1/products");
const auth = require("./v1/auth");
const admin = require("./v1/admin");

module.exports = (app) => {
  app.use("/v1/products", products);
  app.use("/v1/auth", auth);
  app.use("/v1/admin", admin);
};
