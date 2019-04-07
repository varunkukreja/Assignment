class RecordNotFoundError extends Error {
  constructor(message) {
      super(message);
      this.name = "RecordNotFoundError";
      this.status=404;
  }
}
module.exports=RecordNotFoundError