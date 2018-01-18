const express = require('express');
const router = express.Router();
const Signin = require('../controllers/signin')

router.post('/', Signin.signin)

module.exports = router