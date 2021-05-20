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


const register = async (email, password) => {
    // hash the password
    const hashedPass = await hash(password);

    try {
        const users = await query(`INSERT INTO users (email, password) VALUES ($1, $2) RETURNING id`, [email, hashedPass]);

        const {
            id
        } = users[0];

        const token = generateToken(new Payload(id));

        return token;

    } catch(e) {
        // for error code check this
        // https://www.npmjs.com/package/pg-error-constants

        if (e.code === '23505') {
            throw new ServerError('Email already exists!', 409);
        }
        throw e;
    }
}

const login = async (email, plainTextPass) => {

    const user = await query('SELECT id, password FROM users WHERE email=$1', [email]);
    if (user.length === 0) {
        throw new ServerError('This email does not exist', 404);
    }

    const {
        id,
        password
    } = user[0];

    const isCorrect = await compare(plainTextPass, password);
    console.log(`pass: ${isCorrect}`);

    if (!isCorrect) {
        throw new ServerError('Password is incorrect', 403);
    }

    const token = await generateToken(new Payload(id));

    return token;
}

module.exports = {
    register,
    login
}
