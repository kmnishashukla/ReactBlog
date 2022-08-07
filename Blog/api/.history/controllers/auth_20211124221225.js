const User = require("../models/User");
const bcrypt = require('bcrypt');

exports.create = async (req,res) => {
    try{
        const salt = await bcrypt.genSalt(10);
        const hashPass = await bcrypt.hash(req.body.password,salt);
        let userDetails = {
            username:req.body.username,
            email:req.body.email,
            password:hashPass
        }
        const user = await User.create(userDetails);
        return res.status(200).json({
            success:true,
            message:"User created successfully",
            user:user
        })

    }catch(error){
        console.log(error);
        return res.status(400).json({
            success : false,
            message:"User creation error",
            error : error
        })

    }
}
//login api
exports.login = async (req,res) => {
    console.log("kkk");
    try{
        const user = await User.findOne({ email : req.body.email });
        !user && res.status(400).json("Wrong credentials!")


        const validated = bcrypt.compareSync(req.body.password, user.password);
        !validated && res.status(400).json("Wrong credentials");
        res.status(500).json(err);



    }catch(error){
        console.log(error);
        res.status(500).json(err);

    }
}