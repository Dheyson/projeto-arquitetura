const jwt = require('jsonwebtoken')

module.exports = {
    verifyToken(req, res, next) {
        const token = req.headers['x-token'];

        console.log('verifyToken', 'tokenHeader x-token: ', token)

        if (!token) {
            return res.status(400).json({
                message: 'Token não informado !',
                error: true
            })
        }

        jwt.verify(token, '123', (err, decoded) => {
            if (err) {
                return res.status(400).json({
                    message: 'Falha na autenticação',
                    error: true
                })
            }
            req.userId = decoded.id;
            next()
        })
    }
}