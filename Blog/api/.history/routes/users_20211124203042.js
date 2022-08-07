const express = require('express');
const app = express();
var router = express.Router();
const user = require('../controllers/auth');

router.get('/about', user);






module.exports = router