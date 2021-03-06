const express = require('express');
const router = express.Router();
const LoginController = require('../controllers/LoginController');

router.get('/', (req, res) => {
    res.render('login');
});

router.post('/logged', LoginController.login);




module.exports = router;
