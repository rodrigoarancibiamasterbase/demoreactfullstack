import express from "express";
import jwt from "jsonwebtoken";
const router = express.Router();
const SECRET_KEY = process.env.WEBTOKEN_SECRET_KEY;
import authenticateToken from '../middleware/authenticate.js';
// Sample user data (in a real app, you would use a database)
const users = [
  {
    id: 1,
    username: "user1",
    password: "password1",
    email: "emailuser1@gmail.com",
  },
  {
    id: 2,
    username: "user2",
    password: "password2",
    email: "emailuser1@gmail.com",
  },
];

// Login endpoint

router.get('/user', authenticateToken, (req, res) => {
  const user=users.find((u)=>{return u.id==req.user.userId})
  res.json(user);
});

router.post("/", (req, res) => {
  const { username, password } = req.body;

  const user = users.find(
    (u) => u.username === username && u.password === password
  );

  if (user) {
    const token = jwt.sign({ userId: user.id }, SECRET_KEY, {
      expiresIn: "1h", // Token expires in 1 hour
    });
    res.json({ token });
  } else {
    res.status(401).json({ error: "Invalid credentials" });
  }
});

export default router;
