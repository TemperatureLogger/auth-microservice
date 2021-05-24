// describe the logic of the users

const Router = require('express').Router();

const {
    ServerError
} = require('../errors');

const {
    register,
    login
} = require('./services.js');

// register
Router.post('/', async (req, res) => {

    const {
        username,
        password,
        serialNumber
    } = req.body;

    // console.info(`Body is: ${req.body.password}`);
    console.log(JSON.stringify(req.body))

    const token = await register(username, password, serialNumber);
    res.json({token});
});

// login
Router.post('/login', async (req, res) => {
    const {
        username,
        password
    } = req.body;

    const token = await login(username, password);
    res.json({token});
});

module.exports = Router;