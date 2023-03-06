const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/mvp');

// Creating user schema
const userSchema = mongoose.Schema({
  name : {
      type : String,
      required : true
  },
  password : {
    type : String,
    required : true
  },
});

module.exports = mongoose.model('User', userSchema);

