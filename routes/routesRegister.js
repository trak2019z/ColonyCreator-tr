const express = require('express');
const router = express.Router();
const AccountController = require("../controllers/AccountController");

Registration = require('../models/registration');

router.get('/', AccountController.home);
router.post("/checklog", AccountController.register);


module.exports = router;
