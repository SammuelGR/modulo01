const express = require('express');

const server = express();

// Route params: ?teste=1
// Query params: /users/1
// Request body: { user: Sammuel }

server.get('/users/:index', (req, res) => {
  const users = ['Sammuel', 'Diego', 'Alface'];
  const { index } = req.params;

  res.json(users[index]);
});

server.listen(3000);
