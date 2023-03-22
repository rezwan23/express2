const {planets} = require('../../models/planet.model');

async function getAllPlanets(req, res){
    return res.status(200).json(await planets.find({}, {_id : 0, __v : 0}));
}

async function deleteAllPlanets(req, res){
    await planets.deleteMany({});
    return res.status(200).send({message : 'Deleted'});
}

module.exports = {
    getAllPlanets,
    deleteAllPlanets
}