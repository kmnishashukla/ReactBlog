const Category = require('../models/Category')

exports.create = async (req,res) =>{
    try {
       const category = await Category.create(req.body);
       return res.status(200).json({
           success:true,
           message:"Category created successfully",
           category: category
       })
      
    }catch(error){
       return res.status(400).json({
           success: false,
           error:error,
           message: "Category creation failed"
       })
    }
}
//get data
exports.findAll = async (req,res) => {
    try{
       const category = await Category.findAll();
       return res.status(200).json({
           success : true,
           message:"Category fetched successfully",
           category:category
       })

    }catch(error){
         return res.status(400).json({
             success: false,
             message: "Category fetching error",
             error: error
         })
    }
}