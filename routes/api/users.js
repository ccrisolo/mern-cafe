const express = require("express");
const router = express.Router();
const usersCtrl = require("../../controllers/api/users");


//define server side routes below and mount in server.js
//POST /api/users
router.post("/", usersCtrl.create);

module.exports = router;
