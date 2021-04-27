let Employee = require("../models/Employee");

exports.addEmployee = async (req, res, next) => {
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
}

exports.deleteEmployee = async (req, res, next) => {
    Employee.deleteOne({_id:req.body.userId},(err,result)=> {
        if(!err){
            if(result.deletedCount>0){
                res.send("Record deleted successfully")
            } else {
                res.send("Record not present");
            }
        } else {
            res.send("Error generated "+err);
        }
    });
}