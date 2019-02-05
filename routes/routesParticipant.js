const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('participantHome');
});

router.get('/applications', (req, res) => {
    res.render('participantApplication');
});

router.get('/myColony', (req, res) => {
    res.render('participantColonyManager');
});


module.exports = router;
