const Router = require('express').Router();

const usersController = require ('./users/controllers.js');

Router.use('/users', usersController);

module.exports = Router;
