class CustomError {
  constructor(code, msg) {
    this.code = code;
    this.message = msg;
  }

  static badRequest(msg) {
    return new CustomError(400, msg);
  }
}

module.exports = CustomError;
