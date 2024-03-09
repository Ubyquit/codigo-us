const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = 3001;

// Middlewares
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// Route for serving the login page
app.get('/pikachu', (req, res) => {
  res.sendFile(path.join(__dirname, 'pikachu.html'));
});

// Route for handling form submission
app.post('/login', (req, res) => {
  const { email, password, authCode } = req.body;
  // Simulated database of users
  const users = [
    { email: 'user1@example.com', password: 'password123', authCode: '123456' },
    { email: 'user2@example.com', password: 'abc123', authCode: '654321' }
  ];

  const user = users.find(u => u.email === email);

  if (!user) {
    return res.send('User not found. Please check your email.');
  }

  if (user.password !== password) {
    return res.send('Incorrect password. Please try again.');
  }

  if (user.authCode !== authCode) {
    return res.send('Incorrect authentication code. Please check your email.');
  }

  // Successful login
  return res.send('Login successful!');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
