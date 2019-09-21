const express = require('express')
const bodyParser = require('body-parser')
const tokenService = require('../services/tokenService')
const userController = require('../controllers/UserController.js')
const cors = require('cors')
const app = express()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors())

app.set("json spaces", 2)

const port = 3000
app.listen(port, () => {
  console.log(`Listening port ${port}`);
})

app.post("/login", userController.login)
app.post("/register", userController.register)
app.get("/load-session", tokenService.verifyToken, userController.loadSession)