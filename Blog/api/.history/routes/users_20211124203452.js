const express = require('express');
const app = express();
var router = express.Router();
const user = require('../controllers/auth');

router.post('/about', user.create);






module.exports = router