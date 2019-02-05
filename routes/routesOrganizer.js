const express = require('express');
const router = express.Router();
const OrganizerController = require("../controllers/OrganizerController");

CreateColony = require('../models/createColony');

router.get('/', OrganizerController.home);
router.get('/createColony', OrganizerController.create);
router.get('/myColony', OrganizerController.show);

router.post("/create", OrganizerController.createColony);
router.post("/edited/:id", OrganizerController.edited);
router.get("/delete/:id", OrganizerController.delete);
router.get("/edit/:id", OrganizerController.edit);


module.exports = router;
