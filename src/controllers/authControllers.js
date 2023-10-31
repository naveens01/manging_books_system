const jwt = require('jsonwebtoken');
const secretKey = 'mysecret321'; 

const authController = {
  loginUser: (req, res) => {
    const user = { id: 1, username: 'exampleUser' };
    const isAuthenticated = true;

    if (isAuthenticated) {
      jwt.sign({ user }, secretKey, { expiresIn: '1h' }, (err, token) => {
        if (err) {
          res.status(500).json({ error: 'Internal Server Error' });
        } else {
          res.json({ token });
        }
      });
    } else {
      res.status(401).json({ error: 'Authentication failed' });
    }
  },
};

module.exports = authController;
