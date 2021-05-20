// payload-ul has just an userId
class Payload {
    constructor(id) {
        this.userId = id;
    }
    // jwt library accepts only plain json data
    toJson() {
        return {
            userId: this.userId
        }
    }
};

module.exports = {
    Payload
}
