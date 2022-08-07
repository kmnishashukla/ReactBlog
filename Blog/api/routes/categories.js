const express = require('express');
const app = express();
var router = express.Router();
const categories = require('../controllers/category');

router.post('/',categories.create);
router.get('/',categories.findAll);




module.exports = router