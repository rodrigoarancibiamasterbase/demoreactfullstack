

import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config()


const SECRET_KEY = process.env.WEBTOKEN_SECRET_KEY;
const authenticateToken = (req, res, next) => {
  const token = req.header('Authorization');

  if (!token) return res.status(401).json({ error: 'Access denied' });
  jwt.verify(token.split(" ")[1], SECRET_KEY, (err, user) => {
    if (err) return res.status(403).json({ error: 'Invalid token' });

    req.user = user;
    next();
  });
};

export default authenticateToken;
