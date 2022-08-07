const express = require('express');
const app = express();
var path = require('path');
const port = 3000



const userRoutes = require('./models/User');

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use("/api", userRoures);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})