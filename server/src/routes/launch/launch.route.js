const express = require('express');

const {getAllLaucnches, createNewLaunch, abortLaunch, deleteAllLaucnches} = require('./launch.controller');

const launchRouter = express.Router();


launchRouter.get('/', getAllLaucnches);
launchRouter.get('/delete', deleteAllLaucnches);
launchRouter.post('/', createNewLaunch);
launchRouter.delete('/', abortLaunch);

module.exports = launchRouter;