const HttpStatus=require('../constants/HttpStatus');
class RecordNotFoundError extends Error {
  constructor(message) {
      super(message);
      this.name = "RecordNotFoundError";
      this.status=HttpStatus.RECORD_NOT_FOUND;
  }
}
module.exports=RecordNotFoundError