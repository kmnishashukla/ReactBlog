const User = require("../models/User");

router.post("/register",async (req,res) => {
    console.log("okkk");
    try{
        return res.status(200).json({
            success:true,
            message:"Congo"
        })
        // const newuser = new User({
        //     username : req.body.username,
        //     email: req.body.email,
        //     password: req.body.password
        // });
        // const user = await newuser.save();
        // res.status(200).json(user);

    }catch (err){
        console.log(error);
        res.status(500).json(err);
    }
});

exports.create = async (req,res) => {
    try{
        const auth = await User.create(req.body);
        return res.status(200).json({
            success:true,
            message:"User creation successfully",
            auth:auth
        })

    }catch(error){
        return res.status(400).json({
            success : false,
            message:"User creation error",
            error : error
        })

    }
}