const express = require('express');

const app = express();

app
    .get('/', (req, res) => {
        res.send('Hola desde node');
    })
    .listen(3000);