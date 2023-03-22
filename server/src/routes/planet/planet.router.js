const express = require('express');
const { getAllPlanets, deleteAllPlanets } = require('./planet.controller');


const planetRouter = express.Router();

planetRouter.get('/', getAllPlanets);
planetRouter.get('/delete', deleteAllPlanets)

module.exports = planetRouter;