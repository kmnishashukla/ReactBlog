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
           res.status(200).json(updatedPost);
        }catch(error){
           res.status(401).json("You can update only your post!")
        }

    }else {
        res.status(401).json("You can update only your post!")
    }


   }catch(error){
       return res.status(400).json({
           success:false,
           message:"Post updation error",
           error:error
       })

  }
}
//delete api
exports.delete = async (req,res) => {
    try{
       const post = await Post.findById(req.params.id);
       if(!post){
            return res.status(400).json({
                message:"Post not exists"
            })
        }
       if (post.username === req.body.username){
           try {
               await post.delete();
               res.status(200).json("Post has been deleted.....");

           }catch (err){
               res.status(401).json("You can delete only your post!");
           }
        } 
        

    }catch(error){
        return res.status(400).json({
            success: false,
            message: "Post deletion error",
            error: error
        })
    }
}
//get post
exports.get = async (req,res) => {
    try{
        const post = await Post.findById(req.params.id);
        res.status(200).json(post);

    }catch(error){
        console.log(error);
       res.status(500).json(error);
    }
}
