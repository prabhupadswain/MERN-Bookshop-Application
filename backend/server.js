const http = require('http');
const app = require('./app');

// Use environment variable PORT
const PORT = process.env.PORT || 3500;

// Creates a HTTP Server object
const server = http.createServer(app);

// Server listens to requests at a certain PORT
server.listen(PORT, () => console.log(`Server running at PORT: ${PORT}`));
