const HttpStatus=require('../constants/HttpStatus');
class UnauthorizedError extends Error {
    constructor(message) {
        super(message);
        this.name = "UnauthorizedError";
        this.status=HttpStatus.UNAUTHORIZED;
    }
  }
  module.exports=UnauthorizedError