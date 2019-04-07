const { validationResult } = require('express-validator/check');
var HttpStatus=require('../constants/HttpStatus');
var {
    RecordNotFoundError, BadRequestError, InternalServerError
    , ConflictError, UnauthorizedError, ForbiddenError, NonAuthoritativeInformationError
} = require('../custom-error/ErrorInstance');

const CommonUtil = require('../util/CommonUtil');

function errorHandler(err, req, res, next) {
   
    next(err)

    if (err instanceof RecordNotFoundError) {
         res.status(err.status).send({ status: err.status, message: err.message });
    }
    else if (err instanceof ConflictError) {
         res.status(err.status).send({ status: err.status, message: err.message });
    }
    else if (err instanceof BadRequestError) {
         res.status(err.status).send({ status: err.status, message: err.message });
    }
    else if (err instanceof InternalServerError) {
        console.log("err.status  "+err.status +"  err.message  "+err.message)
         res.status(err.status).send({ status: err.status, message: err.message });
    }
    else if (err instanceof UnauthorizedError) {
         res.status(err.status).send({ status: err.status, message: err.message });
    }
    else if (err instanceof ForbiddenError) {
         res.status(err.status).send({ status: err.status, message: err.message });
    }
    else if (err instanceof NonAuthoritativeInformationError) {
         res.status(err.status).send({ status: err.status, message: err.message });
    }
    else {
        let errorMessage = CommonUtil.getExceptionRootCause(err);
        res.status(HttpStatus.INTERNAL_SERVER_ERROR).send({ status: HttpStatus.INTERNAL_SERVER_ERROR, message: errorMessage });
    }
}

function handleValidationError(req, res, next) {
    let errors = validationResult(req);
    if (errors.array().length > 0) {
        throw new BadRequestError(errors.array().map(i => `${i.msg}`).join(' , '));
    }
    next();
}

module.exports = {errorHandler, handleValidationError }