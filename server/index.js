var mongoose = require('mongoose');
var bodyparser = require('body-parser');
const user = require('./router'); // Importing routes
const path = require("path");
const axios = require('axios');
// Mongodb connection url
var MONGODB_URI = "mongodb://localhost/mvp";
const { token } = require('../config.js');
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;


app.use(express.static(path.join(__dirname, "../client/dist")));
app.use(bodyparser.json()); // Using bodyparser to parse json data

// Use user route when url matches /api/user/
app.use('/api/user', user);

app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, '../client/dist/index.html'), function(err) {
    if (err) {
      res.status(500).send(err)
    }
  })
})

app.get('/location/attractions', (req, res) => {
  axios.get(`https://maps.googleapis.com/maps/api/place/textsearch/json?&query=${req.query.query}&key=${token}`,
  )
    .then(response => {
      res.status(200).send(response.data);
    })
    .catch(error => {
      res.status(501);
    }
    )
})

// app.post('/add-attraction', (req, res) => {
//   let trip = req.body;
//   const
// })

// https://maps.googleapis.com/maps/api/place/photo?parameters

// Connect to MongoDB
mongoose.connect(MONGODB_URI);
mongoose.connection.on('connected', () => {
  console.log('Connected to MongoDB @ 27017');
});

app.listen(PORT, () => console.log(`listening on port ${PORT}`));
