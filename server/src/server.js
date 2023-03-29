const app =require('./app');

const http = require('http');

const {loadPlanetsData} = require('./models/planet.model');

const {loadLaunchesData} = require('./models/launche.model');

const server = http.createServer(app);

const MONGO_URL = 'mongodb+srv://rez1diu:F5hprs350Dl8tcdm@cluster0.vvcsild.mongodb.net/nasa?retryWrites=true&w=majority';

const mongoose = require('mongoose');

mongoose.connection.on('connected', ()=>{
    console.log('connection ready');
})

mongoose.connection.on('error', () => {
    console.log(err);
})

async function loadServer(){

    await mongoose.connect(MONGO_URL)

    await loadPlanetsData();

    await loadLaunchesData();

    server.listen(3001, () => {
        console.log('server is running in 3001 PORT')
    })
}



loadServer();
 
