//this is extend from our class Error
//this let us to extend codes of our error + 401, 401 etc

class ErrorHandler extends Error {
    constructor(status, message) {
        super(message);
        this.status = status;

        Error.captureStackTrace(this, this.constructor);
    }
}

module.exports = ErrorHandler