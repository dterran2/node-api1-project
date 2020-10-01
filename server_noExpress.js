const http = require('http');

const hostname = '192.168.0.31';
const port = 3000;

const server = http.createServer((req, res) => {

    res.statusCode = 200
    res.setHeader('Content-Type', 'text/plain')
    res.end('Hello World, from Node.js')
});

server.listen(port, hostname, () => {
    console.log(` server listenting at http://${hostname}:${port}/`);
});