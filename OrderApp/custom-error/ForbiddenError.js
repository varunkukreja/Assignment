const HttpStatus=require('../constants/HttpStatus');
class ForbiddenError extends Error {
    constructor(message) {
        super(message);
        this.name = "ForbiddenError";
        this.status=HttpStatus.FORBIDDEN;
    }
  }
  module.exports=ForbiddenError