const express = require('express');
const app = express();
var router = express.Router();
const post = require('../controllers/post');

router.post('/post',post.create);
router.put('/post/:id',post.put);


module.exports = router