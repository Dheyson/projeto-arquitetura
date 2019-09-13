"use strict";
//const userController = require('../controllers/UserController.js')

const express = require("express");
const bodyParser = require("body-parser");
const tokenService = require("../services/tokenService");
const userController = require("../controllers/UserController.js");
const cors = require("cors");
const app = express();
const router = express.Router();
router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());
app.use(cors());

const port = process.env.PORT || 3000;

app.set("json spaces", 2);

app.post("/login", userController.login);

app.post("/register", userController.register);

app.get("/load-session", tokenService.verifyToken, userController.loadSession);

app.listen(port, () => {
    console.log(`Listening port ${port}`);
  });