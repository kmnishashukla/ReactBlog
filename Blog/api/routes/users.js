const express = require('express');
const app = express();
var router = express.Router();
const user = require('../controllers/user');


router.put('/:id',user.put);
router.delete('/:id',user.delete);
router.get("/:id" , user.get);





module.exports = router