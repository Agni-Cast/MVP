const path = require("path");
const axios = require('axios');
const {token} = require('../config.js');

const express = require('express');

const app = express();

const PORT = process.env.PORT || 3000;
app.use(express.static(path.join(__dirname, "../client/dist")));

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

app.listen(PORT, () => console.log(`listening on port ${PORT}`));
