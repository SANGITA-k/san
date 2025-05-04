// This is a basic Node.js example that creates a simple HTTP server.

// Import the built-in 'http' module
const http = require('http');

// Define the hostname and port the server will listen on
const hostname = '127.0.0.1'; // This is the localhost IP address
const port = 3000;

// Create the HTTP server
const server = http.createServer((req, res) => {
  // Set the response HTTP header with status code 200 (OK) and content type 'text/plain'
  res.writeHead(200, { 'Content-Type': 'text/plain' });

  // Send the response body "Hello, World!"
  res.end('Hello, World!\n');
});

// Start the server and listen on the specified hostname and port
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

