const User = require("../models/User");


exports.create = async (req,res) => {
    try{
        console.log("hiiii");
        res.status(200).json({
            message: "Hello EdTech"
        })
        // const auth = await User.create(req.body);
        // return res.status(200).json({
        //     success:true,
        //     message:"User creation successfully",
        //     auth:auth
        // })

    }catch(error){
        console.log(error);
        return res.status(400).json({
            success : false,
            message:"User creation error",
            error : error
        })

    }
}