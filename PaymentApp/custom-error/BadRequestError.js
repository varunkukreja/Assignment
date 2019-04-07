class BadRequestError extends Error {
    constructor(message) {
        super();
        this.name = "BadRequestError";
        this.status=400;
        this.message=message || "Bad Request"
    }
  }
  module.exports=BadRequestError