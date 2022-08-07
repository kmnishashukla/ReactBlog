const express = require('express')
const router = express.Router()
const auth = require("../controllers/auth");

router.post('/register',auth.create);
router.get('/login',auth.login);


module.exports = router