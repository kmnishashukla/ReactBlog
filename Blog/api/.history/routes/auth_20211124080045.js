const router = require("express").Router();
const auth = require("../controllers/auth");

router.post('/register',auth.create);



module.exports = router