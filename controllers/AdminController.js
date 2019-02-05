const CreateColony = require('../models/createColony');
const Registration = require('../models/registration');
const objectId = require("mongodb").ObjectID

exports.home = (req, res) => {
    res.render('adminHome');
}

exports.colony = (req, res) => {
    res.render('adminColonyManager');
}

exports.users = (req, res) => {
    Registration.find({}, function(err, users){
        if(err){
            console.log(err);
        } else {
            res.render('adminUsersManager', {
                users: users
            });
        }
    });
};

exports.show = (req, res) => {
    CreateColony.find({}, function(err, colonies){
        if(err){
            console.log(err);
        } else {
            res.render('adminColonyManager', {
                colonies: colonies
            });
        }
    });
};

exports.delete = (req, res) => {
    const id = req.params.id;
    CreateColony.deleteOne({"_id": objectId(id)}, function(err, result){
        if(err){
            console.log(err);
        } else {
            res.redirect('/adminHome/colony');
        }
    });
};

exports.deleteUser = (req, res) => {
    const id = req.params.id;
    Registration.deleteOne({"_id": objectId(id)}, function(err, result){
        if(err){
            console.log(err);
        } else {
            res.redirect('/adminHome/users');
        }
    });
};

exports.edit = (req, res) => {
    const id = req.params.id;
    CreateColony.findOne({"_id": objectId(id)}, function(err, colony){
        if(err){
            console.log(err);
        } else {
            res.render('adminColonyEditor', {
                colony: colony
            });
        }
    });
};

exports.edited = (req, res) => {
    const creator = req.body; 
    const id = req.params.id;
    req.check('colonyName', 'Colony name must be at least 4 characters').isLength({min:4});
    req.check('colonyPlace', 'Colony place must be at least 4 characters').isLength({min:4});
    req.check('participants', 'Invalid number').isDecimal();
    //req.check('dayOfStart', 'Invalid date of start').isDate();
    //req.check('dayOfEnd', 'Invalid date of end').isDate();
    const errors = req.validationErrors();
    if(errors) {
        req.session.errors = errors;
        req.session.success = false;
        res.redirect('/adminHome/colony');
    } else {       
        CreateColony.updateOne({"_id": objectId(id)}, {$set: creator}, function(err, createColony){
            if(err){
                throw err;
            }
            res.redirect('/adminHome/colony');       
        })
    }
};