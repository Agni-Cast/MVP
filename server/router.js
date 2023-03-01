const express = require('express');
const router = express.Router();
const User = require('../database/index');
const bcrypt = require('bcryptjs');


/**************************** */
const hashedPassword = async (password) => {
  try {
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password, salt);
  } catch (error) {
    throw new Error("Hashing failed", error);
  }
}

const comparePasswords = async (inputPassword, hashedPassword) => {
  try {
    return await bcrypt.compare(inputPassword, hashedPassword);
  } catch (error) {
    throw new Error("Comparison failed", error);
  }
};

/**************************** */

// User login api
router.post('/login', async (req, res) => {
  try {
    let user = await User.findOne({ name: req.body.name });
    if (!user) {
      return res.status(404).json({
        error: true,
        message: "Account not found",
      });
    }

    const isValid = await comparePasswords(req.body.password, user.password);

    if (!isValid) {
      return res.status(400).json({
        error: true,
        message: "Invalid password",
      });
    }

    return res.status(200).send({
      success: true,
      message: "User logged in successfully",
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      error: true,
      message: "Couldn't login. Please try again.",
    });
  }
});

// User signup api
router.post('/signup', async (req, res) => {
  try {
    let user = await User.findOne({
      name: req.body.name,
    })
    if (user) {
      return res.status(400).json({
        error: true,
        message: "Username is already in use",
      })
    }

    user = req.body;
    const hashPassword = await hashedPassword(req.body.password);
    user.password = hashPassword;
    const newUser = await User.create(user);
    await newUser.save();
    return res.status(200).send(user);
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      error: true,
      message: "Cannot signup"
    })
  }
});
// Export module to allow it to be imported in other files
module.exports = router;