const express = require('express');
const fs = require('fs');
const path = require('path');
const { v4: uuidv4 } = require('uuid');

const app = express();
const PORT = 3001;
const DATA_FILE = path.join(__dirname, 'todos.json');

app.use(express.json());

if (!fs.existsSync(DATA_FILE)) {
  fs.writeFileSync(DATA_FILE, '[]', 'utf8');
}

function readTodos() {
  return JSON.parse(fs.readFileSync(DATA_FILE, 'utf8'));
}

function writeTodos(todos) {
  fs.writeFileSync(DATA_FILE, JSON.stringify(todos, null, 2), 'utf8');
}

app.get('/api/todos', (req, res) => {
  res.json(readTodos());
});

app.listen(PORT, () => console.log(`Backend running on http://localhost:${PORT}`));
