const User = require("../models/User");
const Post = require("../models/Post");


exports.create = async (req,res)=> {
    try{
        
    }catch(error){
        console.log(error);
        res.status(500).json(error)
    }
}