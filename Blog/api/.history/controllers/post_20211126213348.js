const User = require("../models/User");
const Post = require("../models/Post");


exports.create = async (req,res)=> {
    try{
        const post = await Post.create(req.body);
        return res.status(200).json({
            success: true,
            message:"Post created successfully",
            post:post
        })
    }catch(error){
        return res.status(400).json({
            success: false,
            message:"Post creation failed",
            error:error
        })
    }
}