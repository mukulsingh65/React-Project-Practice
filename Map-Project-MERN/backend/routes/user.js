
const User = require("../models/User");
const router = require("express").Router();
const bcrypt = require("bcrypt");

//REGISTER
router.post("/register", async (req, res) => {
  try {
    //generate new password
    const salt = await bcrypt.genSalt(10);
    const pass = req.body.password.toString();
    const hashedPassword = await bcrypt.hash(pass, salt);

    //create new user
    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: hashedPassword,
    });

    //save user and respond
    const user = await newUser.save();
    res.status(200).json(user._id);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

//LOGIN
router.post("/login", async (req, res) => {
  try {
    //find user
    const user = await User.findOne({ username: req.body.username });
    !user && res.status(400).json("Wrong username or password");

    //validate password
    const validPassword = await bcrypt.compare(
      req.body.password.toString(),
      user.password
    );
    !validPassword && res.status(400).json("Wrong username or password");

    //send response
    res.status(200).json({ _id: user._id, username: user.username, email: user.email });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;