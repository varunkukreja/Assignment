const HttpStatus=require('../constants/HttpStatus');
class NonAuthoritativeInformationError extends Error {
    constructor(message) {
        super(message);
        this.name = "NonAuthoritativeInformationError";
        this.status=HttpStatus.NON_AUTHORITATIVE_INFORMATION;
    }
  }
  module.exports=NonAuthoritativeInformationError