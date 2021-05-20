const bcryptjs = require('bcryptjs');

// hash functions --> encrypt the password
const hash = async (plainTextPass) => {
    // salt is a random sequence in the front of the encrypted informations
    // the parameter of genSalt is the strength of the salt
    const salt = await bcryptjs.genSalt(4);
    // hash the password with this salt
    const hash = await bcryptjs.hash(plainTextPass, salt);

    return hash;
}

// compare hashed password with a plaintext password
const compare = async (plainTextPass, hashedPass) => {
    const isCorrect = await bcryptjs.compare(plainTextPass, hashedPass);
    return isCorrect;
};

module.exports = {
    hash,
    compare
}
