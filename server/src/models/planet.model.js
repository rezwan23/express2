const planets = require('./planet.mongoose');



function loadPlanetsData() {
    return new Promise((resolve, reject)=>{

        const fs = require('fs');

        const path = require('path');
    
        const { parse } = require('csv-parse');
    
        const isHabitablePlanet = (planet) => {
            return planet['koi_disposition'] == 'CONFIRMED'
                && planet['koi_insol'] > 0.36 && planet['koi_insol'] < 1.11
                && planet['koi_prad'] < 1.6;
        }
    
        fs.createReadStream(path.join(__dirname, '..', '..', 'data/kepler_data.csv'))
            .pipe(parse({
                comment: '#',
                columns: true
            }))
            .on('data', async (data) => {
                if (isHabitablePlanet(data)) {
                    await planets.updateOne({
                        kepler_name : data.kepler_name
                    }, {
                        kepler_name : data.kepler_name
                    }, {
                        upsert : true
                    });
                }
                // console.log(data)
            }).on('end', () => {
                resolve()
                console.log('finish')
            }).on('error', ()=> {
                reject(err)
            })
    })
    

}


module.exports = {
    loadPlanetsData,
    planets
};