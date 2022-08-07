const User = require("../models/User");
const bcrypt = require('bcrypt');

exports.create = async (req,res) => {
    try{
        

    }catch(error){
        console.log(error);
        return res.status(400).json({
            success : false,
            message:"User creation error",
            error : error
        })

    }
}
