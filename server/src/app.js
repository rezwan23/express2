const express = require('express');

const cors = require('cors');

const planetRouter = require('./routes/planet/planet.router');
const launchRouter = require('./routes/launch/launch.route');

const app = express();


app.use(cors());

app.use(express.json());


app.use('/planets', planetRouter);

app.use('/launches', launchRouter)

app.get('/', (req, res) => {
    res.send({id : 1, name : 'Ghnai'});
})


module.exports = app;