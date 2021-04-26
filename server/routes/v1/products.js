const express = require("express");
const products = require("../../controllers/products");
// const authMiddleware = require("../../middlewares/auth");
// const validator = require("../../middlewares/validator");

const router = express.Router();

router.get("/getallproducts", products.getAllProducts);

router.get("/getproduct", products.getProduct);

router.post("/addproduct", products.addProduct);

router.put("/updateproduct", products.updateProduct);

router.delete("/deleteproduct", products.deleteProduct);

module.exports = router;
