const launches = require('./launche.mongoose');

const axios = require('axios');


async function loadLaunchesData(){

    const firstLaunch = await launches.findOne({
        flightNumber : 1,
        mission : "FalconSat",
        rocket : "Falcon 1"
    })

    if(firstLaunch){
        return 
    }

    const responseData = await axios.post('https://api.spacexdata.com/v4/launches/query', {
        query : {},
        options : {
            pagination: false,
            populate : [
                {
                    path  : "rocket",
                    select    :{
                        name  : 1
                    }
                },
                {
                    path : "payloads",
                    select : {
                        customers : 1
                    }
                }
            ]
        }   
    })


    for(let launchData of responseData.data.docs){
        let launch = {
            flightNumber : launchData['flight_number'],
            launchDate : launchData['date_local'],
            mission: launchData['name'],
            rocket: launchData.rocket.name,
            upcoming : launchData['upcoming'],
            success : launchData['success'],
            customers : launchData.payloads.flatMap((payload) => {
                return payload.customers
            })
        }
        launches.create(launch);

    }


    console.log('Launches Downloading...');
}


module.exports = {
    launches,
    loadLaunchesData
};