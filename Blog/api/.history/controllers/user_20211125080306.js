const User = require("../models/User");
const bcrypt = require('bcrypt');


exports.put = async (req,res) => {
    try{
        if (req.body.userId === req.params.id){
            if (req.body.password){
                const salt = await bcrypt.genSalt(10);
                req.body.password = await bcrypt.hash(req.body.password,salt);
            }
            try {
                const updatedUser = await User.findByIdAndUpdate(req.params.id,{
                    $set: req.body,
                });
                res.status(200).json(updatedUser);

            } catch (err) {
                res.status(500).json(err);
            }
        } else {
            res.status(401).json("You can update only your account!");
        }
        

    }catch(error){
        console.log(error);
        return res.status(400).json({
            success : false,
            message:"User creation error",
            error : error
        })

    }
}
