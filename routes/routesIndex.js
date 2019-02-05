const express = require('express');
const router = express.Router();

const HomeController = require("../controllers/HomeController");

router.get('/', HomeController.home);
router.get('/logout', HomeController.home);




module.exports = router;
