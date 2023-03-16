const express = require('express');

const cors = require('cors');

const planetRouter = require('./routes/planet/planet.router');

const app = express();


app.use(cors());

app.use(express.json());


app.use('/planets', planetRouter);

app.get('/', (req, res) => {
    res.send({id : 1, name : 'Ghnai'});
})


module.exports = app;