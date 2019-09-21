const User = require('../models/User')
const tokenService = require('../services/tokenService')

function login(req, res) {
    console.log('UserController.login')

    User.findOne({ username: req.body.username, password: req.body.password }, (err, body) => {
        if (body == null) {
            res.status(400).json({
                error: true,
                message: 'Unsuccessful login, because user was not found',
                user: null
            })
        } else {
            res.status(200).json({
                error: false,
                message: 'Successful login',
                token: tokenService.generateToken(body.id),
                user: body
            })
        }
    })

}

function register(req, res) {
    console.log('UserController.register')

    User.findOne({ username: req.body.username }, (err, body) => {

        if (body == null) {

            const user = new User()
            user.username = req.body.username
            user.password = req.body.password
            user.firstName = req.body.firstName
            user.lastName = req.body.lastName

            user.save()

            res.status(200).json({
                error: false,
                message: 'User registred',
                user: user
            })
        } else {
            res.status(400).json({
                error: true,
                message: 'User already exists',
                user: null
            })
        }
    })
}

function loadSession(req, res) {
    console.log('UserController.loadSession')

    User.findById(req.tokenId, (err, body) => {

        if (body == null)
            res.status(400).json({ error: true, message: 'User not found', user: null })
        else
            res.status(200).json({ error: false, message: 'User found successfully', user: body })

    })

}

module.exports = { login, register, loadSession }