const express = require('express');
const app = express();
var path = require('path');
const mongoose = require('mongoose');
require('dotenv').config()
const cors = require("cors");
//require('dotenv').config();
const cookieParser = require('cookie-parser');




const userRoutes = require('./routes/users');

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

app.use("/api", userRoutes);

let port = process.env.PORT || 4000
app.listen(port, ()=>{
    console.log(`server running on http://localhost:${port}`);
})