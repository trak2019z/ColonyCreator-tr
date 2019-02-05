const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('adminHome');
});
router.get('/colony', (req, res) => {
    res.render('adminColonyManager');
});
router.get('/users', (req, res) => {
    res.render('adminUsersManager');
});

module.exports = router;
