const User = require("../models/User");
const Post = require("../models/Post");
const bcrypt = require('bcrypt');
const { post } = require("../routes/users");

exports.create = async (req,res)=> {
    const newPost = new post(req.body);
    try{

    }catch(error){

    }
}