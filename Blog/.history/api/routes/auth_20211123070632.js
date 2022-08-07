const router = require("express").Router();
const User = require("../models/User");

//register
router.post("/register",async (req,res) => {
    try{
        const newuser = new User({
            username : req.body.username,
            email: req.body.email,
            password: req.body.password
        });
        const user = await newuser.save();
        res.status(200).json(user);

    }catch (err){
        console.log(error);
        res.status(500).json(err);
    }
});

module.exports = router