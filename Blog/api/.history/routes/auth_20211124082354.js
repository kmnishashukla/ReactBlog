const router = require("express").Router();
const auth = require("../controllers/auth");

router.get('/register',auth.create);



module.exports = router