
const express = require('express');

const app = express();
const port = 3000;

app.use(express.json());

// Sample tasks with unique IDs
let nextId = 4;

const toDoList = [
    { id: 1, item: "Karan" },
    { id: 2, item: "SDE" },
    { id: 3, item: "Google" }
];

// GET: Home route
app.get('/', (req, res) => {
    res.status(200).send('Hello World!');
});

// GET: Retrieve all tasks
app.get('/todos', (req, res) => {
    res.status(200).json(toDoList);
});

// GET: Retrieve a single task by ID
app.get('/todos/:id', (req, res) => {
    const id = Number(req.params.id);

    const todo = toDoList.find(task => task.id === id);

    if (!todo) {
        return res.status(404).json({
            message: "Task not found"
        });
    }

    res.status(200).json(todo);
});

// POST: Add a new task
app.post('/todos', (req, res) => {
    const { item } = req.body;

    if (typeof item !== 'string' || !item.trim()) {
        return res.status(400).json({
            message: "A non-empty item is required"
        });
    }

    const newTodo = {
        id: nextId++,
        item: item.trim()
    };

    toDoList.push(newTodo);

    res.status(201).json({
        message: "Task added successfully",
        todo: newTodo
    });
});

// PUT: Replace/update a task by ID
app.put('/todos/:id', (req, res) => {
    const id = Number(req.params.id);
    const { item } = req.body;

    const todo = toDoList.find(task => task.id === id);

    if (!todo) {
        return res.status(404).json({
            message: "Task not found"
        });
    }

    if (typeof item !== 'string' || !item.trim()) {
        return res.status(400).json({
            message: "A non-empty item is required"
        });
    }

    todo.item = item.trim();

    res.status(200).json({
        message: "Task updated successfully",
        todo
    });
});

// PATCH: Partially update a task by ID
app.patch('/todos/:id', (req, res) => {
    const id = Number(req.params.id);
    const todo = toDoList.find(task => task.id === id);

    if (!todo) {
        return res.status(404).json({
            message: "Task not found"
        });
    }

    const { item } = req.body;

    if (typeof item !== 'string' || !item.trim()) {
        return res.status(400).json({
            message: "A non-empty item is required"
        });
    }

    todo.item = item.trim();

    res.status(200).json({
        message: "Task partially updated successfully",
        todo
    });
});

// DELETE: Remove a task by ID
app.delete('/todos/:id', (req, res) => {
    const id = Number(req.params.id);

    const index = toDoList.findIndex(task => task.id === id);

    if (index === -1) {
        return res.status(404).json({
            message: "Task not found"
        });
    }

    toDoList.splice(index, 1);

    // 204 responses must not contain a response body
    res.status(204).end();
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
