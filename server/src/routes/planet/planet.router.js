const express = require('express');
const { getAllPlanets } = require('./planet.controller');


const planetRouter = express.Router();

planetRouter.use('/', getAllPlanets);

module.exports = planetRouter;