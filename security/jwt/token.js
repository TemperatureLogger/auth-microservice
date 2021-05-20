// https://www.npmjs.com/package/jsonwebtoken
const jwt = require(jwt)

const { token } = require('morgan');
const { ServerError } = require('../../errors');

const generalOptions = {
    issuer: 'TempLogger',
    subject: 'Auth Token',
    audince: 'Users'
};

const jwtKey = process.env.NODE_ENV === 'development' ?
            process.env.JWT_SECRET_KEY :
            getSecret(process.env.JWT_SECRET_KEY_FILE);


const generateToken = async (payload) => {
    try {
        const encodingOptions = { ...generalOptions, expiresIn: process.env.JWT_EXPIRE_TIME || '2h'};
        const token = await jwt.sign(payload.toJson(), jwtKey, encodingOptions);

        return token;

    } catch(e) {
        console.error(e);
        throw new ServerError('Error creating token', 500);
    }
};

const verifyAndDecode = async (token, ignoreExpiration = false) {
    try {
        const decodingOptions = { ...generalOptions, ignoreExpiration};
        const decodedToken = await jwt.verify(token, jwtKey, decodingOptions);

        return decodedToken;
    } catch (e) {
        if (e.message === 'jwt expired') {
            throw new ServerError('Token is Expired!', 401);
        } else if (e.message === 'jwt malformed') {
            throw new ServerError('jwt malformed', 401);
        }

        console.error(e);
        throw new ServerError('Error with token', 401);
    }
};

module.exports = {
    generateToken,
    verifyAndDecode
}
