const Router = require('express').Router();

const usersController = require ('./users/controllers.js');
const tokenController = require ('./refresh_token/controllers.js');


Router.use('/users', usersController);
Router.use('/token', tokenController);


module.exports = Router;
