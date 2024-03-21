const http = require('http');
const app = require('./app');

// Creates a HTTP Server
const server = http.createServer(app);

// Use environment variable PORT
const PORT = process.env.PORT || 3500;

// Server listens to requests at PORT
server.listen(PORT, () => console.log(`Server running at PORT: ${PORT}`));
