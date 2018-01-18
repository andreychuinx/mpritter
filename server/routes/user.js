const express = require('express');
const router = express.Router();
const User = require('../controllers/user')
const authentification = require('../middlewares/authentification')

router.put('/:id', authentification, User.update)
module.exports = router