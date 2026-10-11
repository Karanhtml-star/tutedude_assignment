// This is a simple Express.js application that serves a to-do list.
const express = require('express');

// Create an instance of an Expression application
const app = express();
// Define the port on Which the server will listen
const port = 3000;

// Middleware to parse JSON bodies
// This allows us to handle JSON data sent in requests
app.use(express.json());

// Sample to-do list data
const toDoList = ["Karan", "SDE", "Google"];

// Define routes for the application
// The root route server a simple message
app.get('/', (req, res) => {
    res.status(200).send('Hello World!');
});

// route to get the to-do list
// This route responds with the current to-do list
app.get('/todos', (req, res) => {
    res.status(200).send(toDoList);
});


// route to add a new item to the to-do list
// it expects a JSON body with an item field 
app.post('/todos', (req, res) => {
    let newTodo = req.body.item;
    toDoList.push(newTodo);

    res.status(201).send({
        message: "Task added successfully!"
    });
});

// Route to delete an item from the to-do list
// It expected a JSON body with an "item" field
app.delete('/todos', (req, res) => {
    const itemToDelete = req.body.item;

    toDoList.find((elem, index) => {
        if (itemToDelete === elem){
            toDoList.splice(index,1)
        }
    })
    res.status(204).send({
        message:`Delete items ${req.body.item}`
    })
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
