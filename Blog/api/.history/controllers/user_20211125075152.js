const User = require("../models/User");
const bcrypt = require('bcrypt');

exports.put = async (req,res) => {
    try{
        if (req.body.userId === req.params.id){
            try {

            } catch (err) {
                res.status(500).json(err);
            }
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
