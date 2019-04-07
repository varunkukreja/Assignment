class NonAuthoritativeInformationError extends Error {
    constructor(message) {
        super(message);
        this.name = "NonAuthoritativeInformationError";
        this.status=203;
    }
  }
  module.exports=NonAuthoritativeInformationError