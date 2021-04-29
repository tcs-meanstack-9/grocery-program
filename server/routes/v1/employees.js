const express = require("express");
const EmployeeController = require("../../controllers/employees");

const router = express.Router();

router.get("/getallemployees", EmployeeController.getAllEmployees);

//router.get("/getemployee", EmployeeController.getemployee);

router.post("/addemployee", EmployeeController.addEmployee);

router.put("/updateemployee", EmployeeController.updateEmployee);

router.delete("/deleteemployee", EmployeeController.deleteEmployee);

module.exports = router;
