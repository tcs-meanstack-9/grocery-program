
const products = require("./v1/products");

module.exports = (app) => {
  app.use("/v1/products", products);
};
