const app =require('./app');

const http = require('http');

const {loadPlanetsData} = require('./models/planet.model');

const server = http.createServer(app);

async function loadServer(){
    await loadPlanetsData();


    server.listen(3001, () => {
        console.log('server is running in 3001 PORT')
    })
}


loadServer();
 
