const express = require('express');
const app = express();
var router = express.Router();
const post = require('../controllers/post');

router.post('/post',post.create);
router.get('/post/:id',post.get);
router.get('/posts',post.findAll);
router.put('/post/:id',post.put);
router.delete('/post/:id',post.delete);

module.exports = router