const express = require('express');
const app = express();
var path = require('path');
const mongoose = require('mongoose');
require('dotenv').config();
const port = 3000



const userRoutes = require('./routes/users');

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.use(cors());

app.use("/api", userRoutes);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})