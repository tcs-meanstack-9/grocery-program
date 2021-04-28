let Employee = require("../models/Employee");
let ValidationHandler = require("../middlewares/validationHandler");

exports.addEmployee = async (req, res, next) => {
    try {
        ValidationHandler(req);

        const existingEmployee = await Employee.findOne({email:req.body.userId});
        if(existingEmployee) {
            const error = new Error("Employee is already in system");
            error.statusCode = 403;
            throw error;
        }

        let emp = new Employee({
            firstName: req.body.firstName, 
            lastName: req.body.lastName,
            email: req.body.email,
            phoneNumber: req.body.phoneNumber,
            id: req.body.id,
            password: req.body.password,
            dateOfBirth: req.body.dateOfBirth,
            address: req.body.address
        }) 

        emp.save((err, result)=>{
            if (!err) {
                console.log("Employee stored successfully: \n" + result);
            } else {
                console.log("Duplicate Employee. Add failed: " + err);
            }
        });
        return res.send("Adding employee attempted");
    } catch(err) {
        next(err);
    }
}

exports.deleteEmployee = async (req, res, next) => {
    Employee.deleteOne({email:req.body.email},(err,result)=> {
        if(!err){
            if(result.deletedCount > 0) {
                res.send("Record deleted successfully")
            } else {
                res.send("Record not present");
            }
        } else {
            res.send("Error generated "+err);
        }
    });
}