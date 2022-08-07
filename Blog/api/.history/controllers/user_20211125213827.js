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
                },
                  { new: true }
                );
                console.log(updatedUser);
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
//delete api
exports.delete = async (req,res) => {
    try{
        if (req.body.userId === req.params.id){
            try{
                const user = await User.findById(req.params.id);
                    try {
                        await User.findByIdAndDelete(req.params.id);
                        res.status(200).json("User has been deleted...");
                        
                        } catch (err) {
                            res.status(404).json(err);
                    } 
                } catch (err){
                  res.status(404).json("User not found!")
            }   
      
        } else {
            res.status(401).json("You can delete only your account!");
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

