const express = require("express");
const tickets = require("../../controllers/tickets");


const router = express.Router();
router.get("/getalltickets",tickets.getalltickets);


router.post("/createticket",tickets.createticket);
module.exports = router;
