let mongoose = require("mongoose");
let bcrypt = require("bcryptjs");

let Schema = mongoose.Schema;

let userSchema = new Schema({
    firstName:{type:String, required: true},
    lastName:{type:String, required: true},
    email:{type:String, required: true},
    password:{type:String, required: true, select:false},
    dateOfBirth:{type:String, required: true},
    phoneNumber:{type:String, required: true},
    address:{type:String, required: true},
    userId:{type:String, required: false}
});

userSchema.methods.encryptPassword = async (password) => {
    const salt = await bcrypt.genSalt(5);
    const hash = await bcrypt.hash(password, 10);
    return hash;
}

userSchema.methods.validPassword = async (candidatePassword, userHash)=>{
    console.log(this.password);
    const result = await bcrypt.compare(String(candidatePassword), userHash);
    return result;
}

module.exports = mongoose.model("", userSchema, "users");