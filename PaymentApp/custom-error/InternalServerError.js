const HttpStatus=require('../constants/HttpStatus')
class InternalServerError extends Error {
    constructor(message) {
        super();
        this.name = "InternalServerError";
        this.status=HttpStatus.INTERNAL_SERVER_ERROR;
        this.message=message || "Something went wrong.Please try again."
    }
  }
  module.exports=InternalServerError