const express = require('express');
const app = express();
const mongoose = require('mongoose');
const path = require('path');
require('dotenv').config()
const cors = express("cors");
const port = 3000


mongoose.connect('mongodb://localhost:27017/blog').
  catch(error => handleError(error));

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use(cors());
app.use(express.json())

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})