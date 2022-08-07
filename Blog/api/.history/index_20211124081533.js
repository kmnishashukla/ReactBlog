const express = require("express");
const app = express();
var cors = require('cors');
var bodyParser = require('body-parser')
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const path = require('path');
dotenv.config();

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
const mongoDB = process.env.DATABASE;

const authRoute = require("./routes/auth");

mongoose.connect(mongoDB,{
    useNewUrlParser:true,
    useUnifiedTopology: true,
    
}).then(console.log("Connected to MongoDB")).catch((err)=> console.log(err));



app.use("/",(req,res)=>{
    console.log("hey this is main url")
});





app.use("/api",authRoute);


// app.listen("5000",()=>{
//     console.log("Backennd is running..");
// });
let port = process.env.PORT || 4000
app.listen(port,()=>{
    console.log(`server running on http://localhost:${port}`);
})