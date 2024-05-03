const express = require('express')

const router = express.Router();

const userDataController = require('../controller/userData')

router.post('/user', userDataController.postUserData);

module.exports = router