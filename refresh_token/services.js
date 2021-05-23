const {
    Payload
} = require('../security/jwt/models');

const {
    ServerError
} = require('../errors');

const {
    query
} = require('../data');

const {
    generateToken
} = require('../security/jwt/token.js');

const refresh = async (userId) => {

    const token = await generateToken(new Payload(userId));

    return token; 
};

const getRole = async (userId) => {
    const users = await query('SELECT isadmin FROM users where id = $1', [userId]);

    if (users.length === 0) {
        throw new ServerError('User does not exist.', 401);
    }

    const role = users[0].isadmin;
    return role;
};

module.exports = {
    refresh,
    getRole
}
