const {
    query
} = require ('../data');

const { ServerError } = require('../errors');

const {
    generateToken
} = require('../security/jwt/token.js');


const {
    hash,
    compare
} = require('../security/passwords');

const {
    Payload
} = require('../security/jwt/models.js');


const register = async (username, password, serialNumber) => {
    // hash the password
    const hashedPass = await hash(password);

    const serialAddr = await query('SELECT serialnumber FROM hwaddress \
                                    WHERE serialnumber = $1', [serialNumber]);

    if (serialAddr.length === 0) {
        throw new ServerError('The serialNumber is not valid!', 403);
    }

    try {
        const users = await query(`INSERT INTO users (username, password, serialnumber) \
                                    VALUES ($1, $2, $3) RETURNING id`,
                                    [username, hashedPass, serialAddr[0].serialnumber]);

        const {
            id
        } = users[0];

        const token = generateToken(new Payload(id, serialNumber));

        return token;

    } catch(e) {
        // for error code check this
        // https://www.npmjs.com/package/pg-error-constants

        if (e.code === '23505') {
            throw new ServerError('User already exists!', 409);
        }
        throw e;
    }
}

const login = async (username, plainTextPass) => {

    const user = await query('SELECT id, password, serialnumber \
                                FROM users WHERE username=$1', [username]);
    if (user.length === 0) {
        throw new ServerError('This username does not exist', 404);
    }

    const {
        id,
        password,
        serialNumber
    } = user[0];

    const isCorrect = await compare(plainTextPass, password);

    if (!isCorrect) {
        throw new ServerError('Password is incorrect', 403);
    }

    const token = await generateToken(new Payload(id, serialNumber));

    return token;
}

module.exports = {
    register,
    login
}
