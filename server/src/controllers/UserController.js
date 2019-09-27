const User = require("../models/User");
const tokenService = require("../services/tokenService");

async function login(req, res) {
  console.log("UserController.login");

  await User.findOne(
    { username: req.body.username, password: req.body.password },
    (err, body) => {
      if (body == null) {
        res.status(400).json({
          success: false,
          message: "Unsuccessful login, because user was not found",
          user: null
        });
      } else {
        res.status(200).json({
          success: true,
          message: "Successful login",
          token: tokenService.generateToken(body.id),
          user: body
        });
      }
    }
  );
}

async function register(req, res) {
  console.log("UserController.register");

  await User.findOne({ username: req.body.username }, (err, body) => {
    if (body == null) {
      const user = new User();
      user.username = req.body.username;
      user.password = req.body.password;
      user.firstName = req.body.firstName;
      user.lastName = req.body.lastName;

      user.save();

      res.status(200).json({
        success: true,
        message: "User registred",
        user: user
      });
    } else {
      res.status(400).json({
        success: false,
        message: "User already exists",
        user: null
      });
    }
  });
}

async function loadSession(req, res) {
  console.log("UserController.loadSession");

  await User.findById(req.tokenId, (err, body) => {
    if (body == null)
      res
        .status(400)
        .json({ success: false, message: "User not found", user: null });
    else
      res.status(200).json({
        success: true,
        message: "User found successfully",
        user: body
      });
  });
}

module.exports = { login, register, loadSession };
