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
        console.log(error); 
        return res.status(400).json({
            success: false,
            message:"Post creation failed",
            error:error
        })
    }
}

///put api
exports.put = async (req,res) => {
  try {
    const post = await Post.findById(req.params.id);
    if(post.username === req.body.username){
        try {
           const updatedPost = await Post.findByIdAndUpdate(req.params.id,{
               $set: req.body,
           },
           { new: true}
           );
        }catch(error){

        }

    }else {
        res.status(401).json("You can update only your post!")
    }


   }catch(error){

  }
}