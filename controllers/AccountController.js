const Registration = require('../models/registration');

exports.home = (req, res) => {
    res.render('register', {success: req.session.success, errors: req.session.errors});
    req.session.errors = null;
};

exports.register = (req, res) => {
    const registration = req.body; 
    req.check('name', 'Name must be at least 3 characters').isLength({min:3});
    req.check('surname', 'Surname must be at least 2 characters').isLength({min:2});
    req.check('login', 'login must be at least 6 characters').isLength({min:6});
    req.check('password', 'Invalid password').isLength({min:5}).equals(req.body.confirmPassword);
    req.check('mail', 'Invalid e-mail').isEmail();
    const errors = req.validationErrors();
    if(errors) {
        req.session.errors = errors;
        req.session.success = false;
        res.redirect('/register');
    } else {
        req.session.success = true;
        Registration.addUser(registration, function(err, registration){
            if(err){
                throw err;
            }
            res.redirect('/');       
        })
    }
    
};

