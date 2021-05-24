const Router = require('express').Router();

const {
    authorizeAndExtractNoExpiration,
    authorizeAndExtract
} = require('../security/jwt/filters.js');

const {
    refresh,
    getSerialNumber,
} = require('./services.js');

/*
 * refresh token if the old token expires
 * receive in an authorization header the token
 * validate the token
 * create a new token with the same data
 * send the token
 */
Router.get('/refresh', authorizeAndExtractNoExpiration, async (req, res) => {
    const {
        userId,
        serialNumber
    } = req.state.decodedToken;

    const token = await refresh(userId, serialNumber);

    res.json({token});
});

/*
 * authorization for users
 * check if the user has permisisions
 * send a token, receive an userId and the permissions for the user
 */
Router.get('/authorize', authorizeAndExtract, async (req, res) => {
    const {
        userId,
        serialNumber
    } = req.state.decodedToken;

    console.info(`User id is ${userId}`);

    const userSerialNumber = await getSerialNumber(userId);

    res.json({
        userId,
        userSerialNumber
    });
});

module.exports = Router;