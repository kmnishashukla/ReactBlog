const User = require("../models/User");


exports.create = async (req,res) => {
    try{
        const user = await User.create(req.body);
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