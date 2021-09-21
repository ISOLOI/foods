'use strict'
const express = require('express')
const path = require('path')
const fs = require('fs')
const bodyParser = require('body-parser')
const cors = require('cors');

// require('dotenv').config()
const PORT = 3333 || process.env.PORT

const app = express()

var corsOptions = {
  origin: "http://localhost:3000"
};
app.use(cors(corsOptions));

app.use(express.static(path.resolve(__dirname, '../client/build')));


app.get("/meals", (req, res) => {
  fs.readFile('meals.json', 'utf8', (err, data) => {
      res.end(data);
  });
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});