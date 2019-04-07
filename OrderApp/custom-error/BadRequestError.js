const HttpStatus=require('../constants/HttpStatus');
class BadRequestError extends Error {
    constructor(message) {
        super();
        this.name = "BadRequestError";
        this.status=HttpStatus.BAD_REQUEST;
        this.message=message || "Bad Request"
    }
  }
  module.exports=BadRequestError