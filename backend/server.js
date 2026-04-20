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

app.post('/api/todos', (req, res) => {
  const { title, notes, priority, status, dueDate, tags } = req.body;
  if (!title || !title.trim()) {
    return res.status(400).json({ error: 'Title is required' });
  }
  const todo = {
    id: uuidv4(),
    title: title.trim(),
    notes: notes || '',
    priority: priority || 'medium',
    status: status || 'todo',
    dueDate: dueDate || null,
    tags: tags || [],
    createdAt: new Date().toISOString()
  };
  const todos = readTodos();
  todos.push(todo);
  writeTodos(todos);
  res.status(201).json(todo);
});

app.put('/api/todos/:id', (req, res) => {
  const todos = readTodos();
  const index = todos.findIndex(t => t.id === req.params.id);
  if (index === -1) return res.status(404).json({ error: 'Todo not found' });
  todos[index] = { ...todos[index], ...req.body };
  writeTodos(todos);
  res.json(todos[index]);
});

app.delete('/api/todos/:id', (req, res) => {
  const todos = readTodos();
  const index = todos.findIndex(t => t.id === req.params.id);
  if (index === -1) return res.status(404).json({ error: 'Todo not found' });
  todos.splice(index, 1);
  writeTodos(todos);
  res.status(204).end();
});

app.listen(PORT, () => console.log(`Backend running on http://localhost:${PORT}`));
