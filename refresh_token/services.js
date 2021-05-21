const {
    Payload
} = require('../security/jwt/models');

const {
    generateToken
} = require('../security/jwt/token.js');

const refresh = async (userId) => {

    const token = await generateToken(new Payload(userId));

    return token; 
};

module.exports = {
    refresh
}