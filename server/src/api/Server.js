const express = require('express')
const bodyParser = require('body-parser')
const jwt = require('jsonwebtoken');
const { verifyToken } = require('./verifyToken')
//const userController = require('../controllers/UserController.js')
const cors = require('cors')
const app = express()
app.use(cors())

/////////
let userTemp = {}
/////////

const port = 3000
app.listen(port, () => {
    console.log(`Listening port ${port}`)
})

app.set('json spaces', 2)
app.use(bodyParser.json())
app.use(async (req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Headers", "*")
    next()
})

app.post('/login', (req, res) => {
    console.log('Server.login');
    console.log(req.body);

    if(userTemp.username !== req.body.username) {
        return res.status(400).json({
            message: 'Invalid Username',
            error: true
        })
    }
    if(userTemp.password !== req.body.password) {
        return res.status(400).json({
            message: 'Invalid Password',
            error: true
        })
    }

    const token = jwt.sign({ id: userTemp.id },
        '123',
        { expiresIn: 86400 });

    return res.status(200).json({
        token,
        expiresIn: 86400
    })
})

app.post('/register', (req, res) => {
    console.log('Server.register')
    console.log(req.body)

    // implementar codigo de save...
    userTemp = {
        id: 1,
        name: req.body.name,
        username: req.body.username,
        password: req.body.password
    }

    res.json({
        message: 'Register Successfull',
        user: userTemp
    })
})

app.get('/load-session', verifyToken, (req, res) => {
    console.log('Server.load-session')

    res.json({
        message: 'load-session sucessfull',
        user: userTemp
    })
})

//app.post('/login', userController.login)
//app.post('/register', userController.register)
//app.get('/load-session', userController.loadSession)
//app.use('/', userController.loadSession)