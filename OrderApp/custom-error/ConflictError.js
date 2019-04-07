const HttpStatus=require('../constants/HttpStatus');
class ConflictError extends Error {
    constructor(message) {
        super(message);
        this.name = "ConflictError";
        this.status=HttpStatus.CONFLICT;
    }
  }
  module.exports=ConflictError