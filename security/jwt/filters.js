const {
    ServerError
} = require('../../errors');

const {
    verifyAndDecode
} = require ('./token.js');

// create middleware for checking token
const authorizeAndExtract = async (req, res, next) => {
    try {
        // if the authorization field is not present in the request
        if (!req.headers.authorization) {
            throw new ServerError('Missing authorization header', 401);
        }

        // Ex: Authorization: Bearer algsdfgdsfg.dsfgdsfgdsfasdsa...
        const authHeaders = req.headers.authorization.split(" ");
        const token = authHeaders[1];

        const decodedToken = await verifyAndDecode(token, true);

        // transmit information to the next middleware in `state` field
        req.state = {
            decoded
        };

        // continue to next middleware
        next();

    } catch (e) {

        // go with error to next middleware
        next(e);
    }
}

module.exports = {
    authorizeAndExtract
}
