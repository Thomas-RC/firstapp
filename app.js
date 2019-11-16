const http = require('http');
const config = require('./config')
const express = require('express')
const app = express()


var msg = 'Siema wariaty'
app.get('/',(req, res) => {
    res.send(`<h1>${msg}</h1>`)
})


const port = config.PORT
const hostname = config.HOSTNAME
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});