const express = require("express");
const tickets = require("../../controllers/requests");


const router = express.Router();
router.get("/getallrequests",tickets.getallrequests);


router.post("/createrequest",tickets.createrequest);
module.exports = router;
