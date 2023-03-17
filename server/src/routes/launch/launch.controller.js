let { launches, lastFlightNumber } = require('../../models/launche.model');

function getAllLaucnches(req, res, next) {
    if (req.method == 'GET') {
        return res.status(200).json(Array.from(launches.values()));
    }
    else if (req.method == 'DELETE') {

    }
    next();
}

function createNewLaunch(req, res) {
    let launch = req.body;
    lastFlightNumber++;
    launches.set(lastFlightNumber, Object.assign(launch, {
        flightNumber: lastFlightNumber,
        customer: ['ZTM', 'NASA'],
        upcoming: true,
        success: true,
    }
    ));
    return res.status(200).json({ message: "New Launch Added" })
}

function abortLaunch(req, res) {
    let flightNumber = req.body.flightNumber;
    launches.delete(lastFlightNumber)
    return res.status(200).json({ message: "Launch Aborted!" });
}

module.exports = {
    getAllLaucnches,
    abortLaunch,
    createNewLaunch
}