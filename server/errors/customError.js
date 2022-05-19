class CustomError {
  constructor(code, msg) {
    this.code = code;
    this.message = msg;
  }

  static badRequest(msg) {
    return new CustomError(400, msg);
  }

  static databaseErr(code, msg) {
    return new CustomError(500, `${msg} with code ${code}`);
  }
}

module.exports = CustomError;
