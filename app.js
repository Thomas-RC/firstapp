const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.write('<html>');
    res.write('<head><title>First app</title><head>');
    res.write('<body>Hello world</body>');
    res.write('</html>');
    return res.end();
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});