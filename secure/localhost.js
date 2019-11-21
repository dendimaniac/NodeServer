const https = require('https');
const http = require('http');
const fs = require('fs');

const options = {
    key: fs.readFileSync('./ca.key'),
    cert: fs.readFileSync('./ca.crt')
};

module.exports = (app) => {
    https.createServer(options, app).listen(process.env.HTTPS_PORT);

    http.createServer((req, res) => {
        res.writeHead(301, {'Location': 'https://localhost:8000' + req.url});
        res.end();
    }).listen(process.env.HTTP_PORT);
};