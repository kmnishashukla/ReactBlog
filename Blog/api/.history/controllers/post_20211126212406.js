const User = require("../models/User");
const Post = require("../models/Post");


exports.create = async (req,res)=> {
    const newPost = new Post(req.body);
    try{
        const savedPost = newPost.save();
        res.status(200).json(savedPost);
    }catch(error){
        console.log(error);
        res.status(500).json(error)
    }
}