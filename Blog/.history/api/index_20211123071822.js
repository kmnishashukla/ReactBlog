const express = require("express");
const app = express();
var cors = require('cors')
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const path = require('path');
dotenv.config();

app.use(cors());
app.use(express.json());
const mongoDB = process.env.DATABASE;
//const Post = require("./models/Post");
const User = require("./models/User");
const Category = require("./models/Category");
const authRoute = require("./routes/auth");
//mongoose.connect('mongodb://localhost:27017/blog');
mongoose.connect(mongoDB,{
    useNewUrlParser:true,
    useUnifiedTopology: true,
    
}).then(console.log("Connected to MongoDB")).catch((err)=> console.log(err));



app.use("/",(req,res)=>{
    console.log("hey this is main url")
});





app.use("/api/auth",authRoute);


app.listen("5000",()=>{
    console.log("Backennd is running..");
});