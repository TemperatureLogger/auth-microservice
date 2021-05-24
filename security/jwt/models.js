// payload-ul has just an userId
class Payload {
    constructor(id, serialNumber) {
        this.userId = id;
        this.serialNumber = serialNumber;
    }
    // jwt library accepts only plain json data
    toJson() {
        return {
            userId: this.userId,
            serialNumber: this.serialNumber
        }
    }
};

module.exports = {
    Payload
}
