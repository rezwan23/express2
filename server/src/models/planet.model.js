const planets = [

];


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
            .on('data', (data) => {
                if (isHabitablePlanet(data)) {
                    planets.push(data);
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