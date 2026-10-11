# To-Do List API

A simple REST API built with **Node.js and Express.js** to manage a to-do list. This project demonstrates the fundamentals of API development, HTTP methods, routing, middleware, and handling JSON requests and responses.

## Features

- **Get all tasks:** Retrieve the complete to-do list.
- **Add a task:** Add a new item to the list.
- **Delete a task:** Remove an existing item from the list.
- **HTTP status codes:** Use status codes to indicate request outcomes.
- **JSON handling:** Process JSON request bodies using Express middleware.

## Tech Stack

- Node.js
- Express.js
- JavaScript
- Thunder Client for API testing

## Installation and Setup

### 1. Clone the repository

```bash
git clone <your-repository-url>
cd <your-project-folder>
```

### 2. Install dependencies

```bash
npm install express
```

### 3. Start the server

```bash
node index.js
```

Replace `index.js` with your JavaScript filename if it is different.

The server will run at:

`http://localhost:3000`

## API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| GET | `/` | Returns a welcome message |
| GET | `/todos` | Retrieves all tasks |
| POST | `/todos` | Adds a new task |
| DELETE | `/todos` | Deletes a task by its text |

## API Usage

### Get all tasks

**Request**

```http
GET http://localhost:3000/todos
```

**Example response**

```json
[
  "Karan",
  "SDE",
  "Google"
]
```

### Add a task

**Request**

```http
POST http://localhost:3000/todos
```

Set the request body to JSON:

```json
{
  "item": "Learn Express.js"
}
```

**Example response**

```json
{
  "message": "Task added successfully!"
}
```

### Delete a task

**Request**

```http
DELETE http://localhost:3000/todos
```

Set the request body to JSON:

```json
{
  "item": "Google"
}
```

The current implementation removes a matching item from the list.


## Learning Objectives

This project helps practice REST API design, Express.js routing, HTTP methods, JSON middleware, and basic CRUD operations.

## License

This project is available for educational and personal learning purposes.

Karan Singh Rawat
