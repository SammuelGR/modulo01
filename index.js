const express = require('express');

const server = express();

// Route params: ?teste=1
// Query params: /users/1
// Request body: { user: Sammuel }

const users = ['Sammuel', 'Diego', 'Alface', 'Lucas'];

server.get('/users', (req, res) => {
  return res.json(users);
});

server.get('/users/:index', (req, res) => {
  const { index } = req.params;

  res.json(users[index]);
});

server.listen(3000);
