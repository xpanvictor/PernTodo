const CustomError = require('../errors/customError');

function ApiErrorHandler(err, req, res, next) {
  if (err instanceof CustomError) {
    res.status(err.code).json(err.message);
    return;
  }
  res.status(500).json('Internal server error');
}
module.exports = ApiErrorHandler;
