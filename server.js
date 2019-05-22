"use strict";

const express = require('express');
const app = express();

const { quotes } = require('./quotes');


app.get('/', (req, res) => {
res.send(quotes[Math.floor(Math.random()*quotes.length)]);
});

app.listen(3000, () => console.log('You got served! on port: 3000'));
