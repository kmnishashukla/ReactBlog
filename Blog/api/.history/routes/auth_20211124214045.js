const express = require('express')
const router = express.Router()
const auth = require("../controllers/auth");

router.post('/register',auth.create);
router.post('/login',auth.login);


module.exports = router