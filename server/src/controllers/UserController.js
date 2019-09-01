const User = require('../models/User');

function login(req, res) {
    console.log('UserController.login')

    User.findOne({ username: req.body.username, password: req.body.password }, (err, body) => {
        if (body != null) {
            console.log(`User finded: ${body}`);
            res.json({ message: 'User finded', user: body });
        } else {
            console.log('User not finded');
            res.json({ message: 'User not finded', user: null });
        }
    });
}

function register(req, res) {
    console.log('UserController.register')

    const user = new User();
    user.username = req.body.username;
    user.password = req.body.password;
    user.name = req.body.name;

    user.save();

    res.json({ message: 'User registred', user: user });
}

function loadSession(req, res) {
    console.log('UserController.loadSession')

    User.findById(req.query.id, (err, body) => {
        res.json({ user: body });
    });

}

module.exports = { login, register, loadSession }