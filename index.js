'use strict';

const express = require('express');

const app = express();

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.send('Hello from my Node Server');
});

app.get('/demo', (req, res) => {
    console.log('request', req);
    res.send('demo');
});

app.listen(3000, () => {
    console.log('Server app start?');
});