const express = require("express");
const Orders = require("../../controllers/orders");

const router = express.Router();

router.get("/getallOrders", Orders.getAllOrders);


router.get("/getorder",Orders.getorder);


router.post("/addorder", Orders.createOrder);
// router.put("/update", Orders.updateOrder);

// router.delete("/deletetorder", Orders.deleteOrder);



module.exports = router;
