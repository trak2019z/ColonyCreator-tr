const Registration = require('../models/registration');

exports.login = (req, res) => {
    const data = req.body;
    Registration.findOne({login: req.body.login}, function(err, user) {
        if(user ===null){
            res.end("Login invalid");
        }else if (user.login === req.body.login && user.password === req.body.password){
            if(user.userType === "organizer"){
                res.redirect("/organizerHome");
            }
            if(user.userType === "participant"){
                res.redirect("/participantHome")
            }
            if(user.userType === "admin"){
                res.redirect("/adminHome");
            }
        } else {
            console.log("Credentials wrong");
            res.end("Login invalid");
        }
    });
};
