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
        email,
        password
    } = req.body;

    // console.info(`Body is: ${req.body.password}`);
    console.log(JSON.stringify(req.body))

    if (!email.includes('@')) {
        throw new ServerError('Invalid email', 400);
    }

    const token = await register(email, password);
    res.json({token});
});

// login
Router.post('/login', async (req, res) => {
    const {
        email,
        password
    } = req.body;

    if (!email.includes("@")) {
        throw new ServerError('Invalid email', 400);
    }


    const token = await login(email, password);
    res.json({token});
});

module.exports = Router;