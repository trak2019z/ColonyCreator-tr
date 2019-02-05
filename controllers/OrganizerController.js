const CreateColony = require('../models/createColony');
const objectId = require("mongodb").ObjectID

exports.createColony = (req, res) => {
    const creator = req.body; 
    req.check('colonyName', 'Colony name must be at least 4 characters').isLength({min:4});
    req.check('colonyPlace', 'Colony place must be at least 4 characters').isLength({min:4});
    req.check('participants', 'Invalid number').isDecimal();
    //req.check('dayOfStart', 'Invalid date of start').isDate();
    //req.check('dayOfEnd', 'Invalid date of end').isDate();
    const errors = req.validationErrors();
    if(errors) {
        req.session.errors = errors;
        req.session.success = false;
        res.render('organizerCreateManager', {
            creator: creator
        });
    } else {
        req.session.success = true;        
        CreateColony.addColony(creator, function(err, createColony){
            if(err){
                throw err;
            }
            res.redirect('/organizerHome/createColony');       
        })
    }
    
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
        res.redirect('/organizerHome/createColony');
    } else {       
        CreateColony.updateOne({"_id": objectId(id)}, {$set: creator}, function(err, createColony){
            if(err){
                throw err;
            }
            res.redirect('/organizerHome/myColony');       
        })
    }
};

exports.home = (req, res) => {
    res.render('organizerHome');
}
exports.create = (req, res) => {
    res.render('organizerCreateManager',{success: req.session.success, errors: req.session.errors});
    req.session.errors = null;    
};
exports.show = (req, res) => {
    CreateColony.find({}, function(err, colonies){
        if(err){
            console.log(err);
        } else {
            res.render('organizerColonyManager', {
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
            res.redirect('/organizerHome/myColony');
        }
    });
};

exports.edit = (req, res) => {
    const id = req.params.id;
    CreateColony.findOne({"_id": objectId(id)}, function(err, colony){
        if(err){
            console.log(err);
        } else {
            res.render('colonyEditor', {
                colony: colony
            });
        }
    });
};