var exports = module.exports = {};

exports.isObjectValid = (object) => {

    if (typeof object === "undefined" || object === null) {
        return false;
    } else {
        return true;
    }
}

exports.isKeyValid = (key) => {

    if (typeof key === "undefined" || key === null || key === "") {
        return false;
    } else {
        return true;
    }
}


exports.getExceptionRootCause = (exception) => {
        if (exports.isObjectValid(exception) && exports.isObjectValid(exception.cause)
            && exports.isObjectValid(exception.cause.root) && exports.isObjectValid(exception.cause.root.Envelope)
            && exports.isObjectValid(exception.cause.root.Envelope.Body)
            && exports.isObjectValid(exception.cause.root.Envelope.Body.Fault)
            && exports.isObjectValid(exception.cause.root.Envelope.Body.Fault.faultstring)) {
            return exception.cause.root.Envelope.Body.Fault.faultstring;
        } else {

            return exception.message;
        }
}
