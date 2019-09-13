const express = require('express')
const bodyParser = require('body-parser')
const tokenService = require('../services/tokenService')
const userController = require('../controllers/UserController.js')
const cors = require('cors')
const app = express()
//const userController = require('../controllers/UserController.js')

app.use(cors())
app.use(bodyParser.json())

const port = process.env.PORT || 3000
app.listen(port, () => {
    console.log(`Listening port ${port}`)
})

app.use(async (req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Headers", "*")
    next()
})

app.set('json spaces', 2)

app.post('/login', userController.login)

app.post('/register', userController.register)

app.get('/load-session', tokenService.verifyToken, userController.loadSession)
