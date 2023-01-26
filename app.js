const express = require('express');
const app = express();
const {calcRouter} = require('routes/calc');

app.use(express.json());
app.use(express.static('public'));

app.use('/calc', calcRouter);

app.listen(3000);