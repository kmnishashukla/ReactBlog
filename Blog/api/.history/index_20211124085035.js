const express = require('express');
const app = express();
const mongoose = require('mongoose');
const path = require('path');
require('dotenv').config()
const cors = express("cors");
const port = 3000


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use(cors());
app.use(express.json())


const Database = process.env.DB_URL;


mongoose.cooect(Database,{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(console.log('DB CONNECTED')).catch(error=>{
    console.log(error);
})

let port = process.env.PORT || 4000
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})