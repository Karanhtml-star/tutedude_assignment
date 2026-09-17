// server.js
// A basic web server using Node's built-in "http" and "fs" modules.

const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 3000;

// Reads an HTML file and sends it back as the response.
function serveFile(fileName, statusCode, res) {

  const filePath = path.join(__dirname, 'public', fileName);

  fs.readFile(filePath, 'utf8', (err, data) => {

    if (err) {
      console.log("Error reading file:", err);

      res.writeHead(500, {
        'Content-Type': 'text/html'
      });

      res.end('<h1>500 - Internal Server Error</h1>');
      return;
    }

    res.writeHead(statusCode, {
      'Content-Type': 'text/html'
    });

    res.end(data);
  });
}


// Create server
const server = http.createServer((req, res) => {

  console.log(`Request: ${req.method} ${req.url}`);

  // Home
  if (req.url === '/' || req.url === '/home') {

    serveFile('home.html', 200, res);

  }

  // About
  else if (req.url === '/about') {

    serveFile('about.html', 200, res);

  }

  // Contact
  else if (req.url === '/contact') {

    serveFile('contact.html', 200, res);

  }

  // 404
  else {

    serveFile('404.html', 404, res);

  }

});


// Start server
server.listen(PORT, () => {

  console.log(`Server running at http://localhost:${PORT}`);

});
