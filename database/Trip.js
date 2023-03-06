const mongoose = require('mongoose');

const tripsSchema = mongoose.Schema({
  city : {
    type : String,
    required: true
  },
  attraction : {
    type : String,
    required: true
  },
  photo : {
    type : String,
    required: true
  },
  user_id: {
    type: String,
    // required: true
  }
})

module.exports = mongoose.model('Trip', tripsSchema);
