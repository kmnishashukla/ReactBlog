const express = require('express');
const app = express();
var path = require('path');
const mongoose = require('mongoose');
require('dotenv').config()
const cors = require("cors");
//require('dotenv').config();
const cookieParser = require('cookie-parser');
const multer = require("multer");




const authRoutes = require('./routes/auth');
const userRoutes = require('./routes/users');
const postRoutes = require('./routes/posts');
const categoryRoutes = require('./routes/categories'); 

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.use(cors());
app.use(express.json());
app.use(cookieParser());
const DB_URL = process.env.Database;

mongoose.connect(DB_URL, {
    useNewUrlParser:true,
    useUnifiedTopology:true,
   
}).then(console.log('DB CONNECTED')).catch(error=>{
    console.log(error);
});

const storage = multer.diskStorage({
    destination:(req,file,cb) => {
        cb(null,"images")
    },filename:(req,file,cb) =>{ 
        // cb(null,"hello.jpeg");
        cb(null,req.body.name);
    }
});

const upload = multer({storage:storage});
app.post("/api/upload",upload.single("file"),(req,res) => {
    res.status(200).json("File has been uploaded");
})

app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api",postRoutes);
app.use("/api/category",categoryRoutes);

let port = process.env.PORT || 4000
app.listen(port, ()=>{
    console.log(`server running on http://localhost:${port}`);
})