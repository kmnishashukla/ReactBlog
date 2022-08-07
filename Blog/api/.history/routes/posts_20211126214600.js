const express = require('express');
const app = express();
var router = express.Router();
const post = require('../controllers/post');

router.post('/post',post.create);
router.put('/post',post.update);


module.exports = router