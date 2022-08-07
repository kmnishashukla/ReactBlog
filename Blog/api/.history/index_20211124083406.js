const express = require('express');
const app = express();
const mongoose = require('mongoose');
const port = 3000


try {
    await mongoose.connect('mongodb://localhost:27017/test');
} catch (error) {
    handleError(error);
}

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})