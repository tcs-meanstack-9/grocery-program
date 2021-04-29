let jwt = require("jwt-simple");
let passport = require("passport");
let config = require("../config/jwtSecret.js");
let ValidationHandler = require("../middlewares/validationHandler")
let User = require("../models/user");

exports.signin = async (req, res, next) => {
    try {
        const userId = req.body.userId;
        const password = req.body.password;
        const user = await User.findOne({userId}).select("+password");
        if(!user) {
            const error = new Error("Wrong Credentials1");
            error.statusCode = 401;
            throw error;
        }

        const validPassword = await user.validPassword(password, user.password);
        if(!validPassword) {
            const error = new Error("Wrong Credentials2");
            error.statusCode = 401;
            throw error;
        }

        const token = jwt.encode({id:user.id}, config.jwtSecret);
        return res.send({user,token});
    } catch (err) {
        next(err);
    }
}

exports.signup = async(req, res, next) => {
    try{
        ValidationHandler(req);

        const existingUser = await User.findOne({email:req.body.email});
        if(existingUser) {
            const error = new Error("Email already used");
            error.statusCode = 403;
            throw error;
        }

        let user = new User();
        user.firstName = req.body.firstName;
        user.lastName = req.body.lastName;
        user.email = req.body.email;
        user.password = await user.encryptPassword(req.body.password);
        user.dateOfBirth = req.body.dateOfBirth;
        user.phoneNumber = req.body.phoneNumber;
        user.address = req.body.address;
        user.userId = req.body.firstName + req.body.lastName.charAt(0) + Math.floor(Math.random() * 10000);
        user = await user.save();

        const token = jwt.encode({id:user.id}, config.jwtSecret);

        user.save((err,result)=> {
            if (!err) {
                console.log("User stored successfully: \n" + result);
            } else {
                console.log("Duplicate user. Sign up failed: " + err);
            }
        });
        return res.send({user,token});
    } catch(err) {
        next(err);
    }
}

exports.me = async (req, res, next) => {
    try {
        const user = await User.findById(req.user);
        return res.send(user);
    } catch(err) {
        next(err);
    }
}