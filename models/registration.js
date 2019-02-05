const mongoose = require('mongoose');

//Schema
const registrationSchema = mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    surname:{
        type: String,
        required: true
    },
    mail:{
        type: String,
        required: true
    },
    login:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    confirmPassword:{
        type: String,
        required: true
    },
    userType:
    {
        type: String,
        required: true
    }
});

const Registration = module.exports = mongoose.model('Registration', registrationSchema);

//Add user
module.exports.addUser = function(registration, callback){
    Registration.create(registration, callback);
}
//module.exports.registrations = mongoose.model("registrations", registrationSchema);