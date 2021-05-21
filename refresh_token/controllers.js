const Router = require('express').Router();

const {
    authorizeAndExtract
} = require('../security/jwt/filters.js');

const {
    refresh
} = require('./services.js');

/*
 * receive in an authorization header the token
 * validate the token
 * create a new token with the same data
 * send the token
 */
Router.get('/refresh', authorizeAndExtract, async (req, res) => {
    const {
        userId
    } = req.state.decoded;

    const token = await refresh(userId);

    res.json({token});
});

module.exports = Router;