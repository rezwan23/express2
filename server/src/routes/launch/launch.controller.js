let { launches } = require('../../models/launche.model');

async function getAllLaucnches(req, res, next) {
    if (req.method == 'GET') {
        return res.status(200).json(await launches.find({}));
    }
    else if (req.method == 'DELETE') {

    }
    next();
}

async function createNewLaunch(req, res) {
    let launch = req.body;
    try{
        let lastFlightNumber;

        let flights = await launches.find({})
        .sort({flightNumber : -1})
        .limit(1)
        if(flights.length){
            lastFlightNumber = flights[0].flightNumber;
        }else{
            lastFlightNumber = 100;
        }

        console.log(launch)

        await launches.create(Object.assign(launch, {
            flightNumber : ++lastFlightNumber,
            customer : ['ZTM', 'NASA'],
            upcoming : true,
            success: true
        }));
        return res.status(200).json({ message: "New Launch Added" })
    }catch(err){
        console.error(err);
        return res.status(400).send({message : err.message});
    }

    
}

async function abortLaunch(req, res) {
    let flightNumber = req.body.flightNumber;
    await launches.deleteMany({flightNumber : flightNumber});
    return res.status(200).json({ message: "Launch Aborted!" });
}

async function deleteAllLaucnches(req, res){
    await launches.deleteMany({});
    return res.status(200).send({message : 'Deleted!'});
}

module.exports = {
    getAllLaucnches,
    abortLaunch,
    createNewLaunch,
    deleteAllLaucnches
}