# 🌐 Basic Node.js Web Server

A simple web server built using **Node.js core modules** without Express.js.
This project demonstrates the fundamentals of **HTTP requests, responses, routing, file handling, and HTTP status codes**.

## 📌 Features

* Built using Node.js built-in modules
* No external dependencies
* Serves HTML files dynamically
* Basic URL routing
* Handles `404 - Page Not Found`
* Handles file-reading errors
* Uses HTTP status codes
* Demonstrates Request (`req`) and Response (`res`)


## 📁 Project Structure

```text
files/
│
├── server.js
|
├──public├── home.html 
         ├── about.html
         ├── contact.html
         └── 404.html
```

All HTML files are located in the **same directory as ****`server.js`**.

## 🚀 Getting Started

### 1. Install Node.js

Make sure Node.js is installed on your system.

Check the installation:

```bash
node --version
```

If Node.js is installed, you'll see a version number.

### 2. Clone or download the project

Open the project folder in your terminal.

### 3. Start the server

Run:

```bash
node server.js
```

You should see:

```text
Server running at http://localhost:3000
```

### Examples

Home:

```text
http://localhost:3000/
```

About:

```text
http://localhost:3000/about
```

Contact:

```text
http://localhost:3000/contact
```

Invalid route:

```text
http://localhost:3000/random
```

The invalid route will display the `404.html` page.

## 🔄 How It Works

The browser sends an HTTP request to the Node.js server.

```text
Browser
   │
   │ HTTP Request
   ▼
Node.js Server
   │
   │ Check req.url
   ▼
Routing
   │
   ├── /          → home.html
   ├── /home      → home.html
   ├── /about     → about.html
   ├── /contact   → contact.html
   └── Other      → 404.html
   │
   ▼
Read HTML using fs
   │
   ▼
Send response using res
   │
   ▼
Browser
```

## 🧠 Concepts Learned

This project demonstrates several important backend concepts:

### Request

The `req` object contains information about the client's request.

```js
req.method
req.url
```

For example:

```text
GET /about
```

### Response

The `res` object is used to send a response back to the client.

```js
res.writeHead(200, {
  'Content-Type': 'text/html'
});

res.end(data);
```

### Routing

The server checks the requested URL:

```js
if (req.url === '/' || req.url === '/home') {
  serveFile('home.html', 200, res);
}
```

This determines which HTML file should be returned.

### File System

The `fs` module reads the requested HTML file:

```js
fs.readFile(filePath, 'utf8', (err, data) => {
  // ...
});
```

### HTTP Status Codes

The project uses:

* `200` — Successful request
* `404` — Page not found
* `500` — Internal server error



By - Karan Singh Rawat
