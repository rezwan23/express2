const express = require('express');

const {getAllLaucnches, createNewLaunch, abortLaunch} = require('./launch.controller');

const launchRouter = express.Router();


launchRouter.get('/', getAllLaucnches);
launchRouter.post('/', createNewLaunch);
launchRouter.delete('/', abortLaunch);

module.exports = launchRouter;