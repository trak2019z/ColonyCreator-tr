const express = require('express');
const router = express.Router();
const AdminController = require("../controllers/AdminController");

CreateColony = require('../models/createColony');
Registration = require('../models/registration');

router.get('/', AdminController.home);
router.get('/colony', AdminController.show);
router.get('/users', AdminController.users);

router.post("/edited/:id", AdminController.edited);
router.get("/delete/:id", AdminController.delete);
router.get("/edit/:id", AdminController.edit);
router.get("/deleteUser/:id", AdminController.deleteUser);

module.exports = router;
