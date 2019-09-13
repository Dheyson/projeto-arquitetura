const jwt = require('jsonwebtoken')

const secret = "zl2kPzKL78A67fnK4FN8FD8FdD9N8a8N9S76NTdf8s3SDFNz888SDNFnYa";

module.exports = {
  // Checking JWT
  verifyToken(req, res, next) {
    const token = req.headers["x-token"];

    if (!token) {
      return res.status(400).json({
        message: "Token não informado !",
        error: true
      });
    }

    jwt.verify(token, secret, (err, decoded) => {
      if (err) {
        return res.status(400).json({
          message: "Falha na autenticação",
          error: true
        });
      }
      req.tokenId = decoded.id;
      next();
    });
  },

  // Generating JWT
  generateToken(id) {
    return jwt.sign({ id }, secret, { expiresIn: 86400 });
  }
};
