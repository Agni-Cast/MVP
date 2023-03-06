const express = require('express');
const router = express.Router();
const User = require('../database/User');
const Trip = require('../database/Trip')
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { SECRET } = require('../config.js');

/**************************** */
const createToken = (_id) => {
  return jwt.sign({_id}, SECRET, { expiresIn: '3d' });
}
/**************************** */

const loginUser = async function(req){
  const {name, password} = req.body;
  if (!name || !password) {
    throw Error('All fields must be filled');
  }
  const user = await User.findOne({name})

  if (!user) {
    throw Error('Incorrect Name');
  };

  const match = await bcrypt.compare(password, user.password);
  if (!match) {
    throw Error('Incorrect Password');
  }
  return user;
}

// User login api
router.post('/login', async (req, res) => {
  const { name } = req.body;
  try {
    console.log(req.body)
    const user = await loginUser(req);
    const token = createToken(user._id);
    res.status(200).json({name, token});
  }catch(error) {
    res.status(400).json({error: error.message});
  }
});

/**************************** * SIGNUP /**************************** * */

const signupUser = async function(req) {
  const { name, password } = req.body;

  if (!name || !password) {
    throw Error('All fields must be filled');
  }

  const exists = await User.findOne({name});
  if (exists) {
    throw Error('Username already in use');
  };
  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);
  let user = req.body;
  user.password = hash;
  let result = await User.create(user);
  return result;
}

// User signup api
router.post('/signup', async (req, res) => {
  const {name, password} = req.body;
  console.log(name, password)
  try {
    const user = await signupUser(req);
    await user.save()
    const token = createToken(user._id);

    res.status(200).json({name, token});

  } catch(err) {
    res.status(400).json({error: err.message});

  }
});

// Export module to allow it to be imported in other files
module.exports = router;
