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
const jwt = require('jsonwebtoken');
const { SECRET } = require('../config.js');
const User = require('../database/User');
const Trip = require('../database/Trip');


app.use(express.static(path.join(__dirname, "../client/dist")));
app.use(bodyparser.json()); // Using bodyparser to parse json data

// Use user route when url matches /api/user/
app.use('/api/user', user);

// PREVENT ACCESS IF NOT LOGGED IN middleware
const requireAut = async (req, res, next) => {
  const {authorization} = req.headers;
  if (!authorization) {
    return res.status(201).json({error: 'Authorization token required'});
  }

  const token = authorization.split(' ')[1];

  try {
    const { _id } = jwt.verify(token, SECRET);
    req.user = await User.findOne({ _id }).select('_id');
    next();
  } catch(error) {
    console.log(error)
    res.status(401).json({error: 'REQUEST NOT AUTHORIZED'});
  }
}
// REQUIRE AUTHLINK FOR ATTRACTION ROUTES
app.use(requireAut);

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

app.post('/save-trip', async (req, res) => {
  const {city, attraction, photo} = req.body;
  try {
    const {authorization} = req.headers;
    const token = authorization.split(' ')[1];
    const { _id } = jwt.verify(token, SECRET);
    const user_id = _id;
    const trip = await Trip.create({city, attraction, photo, user_id})

    res.status(200).json(trip)
  } catch (error) {
    res.status(400).json({error: error});
  }

})

app.get('/get-trips', async (req, res) => {
  try {
    const user_id = req.user._id
    const trips = await Trip.find({user_id}).sort({createdAt: -1})
    res.status(200).json(trips)
  } catch (error) {
    res.status(400).json({error: error});
  }

})

app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, '../client/dist/index.html'), function(err) {
    if (err) {
      res.status(500).send(err)
    }
  })
})
// Connect to MongoDB
mongoose.connect(MONGODB_URI);
mongoose.connection.on('connected', () => {
  console.log('Connected to MongoDB @ 27017');
});

app.listen(PORT, () => console.log(`listening on port ${PORT}`));
