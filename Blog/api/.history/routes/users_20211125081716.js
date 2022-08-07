const express = require('express');
const app = express();
var router = express.Router();
const user = require('../controllers/user');


router.put('/:id',user.put);







module.exports = router