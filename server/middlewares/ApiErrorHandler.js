const CustomError = require('../errors/customError');

function ApiErrorHandler(err, req, res, next) {
  res.status(500).json('Something went wrong');
}
module.exports = ApiErrorHandler;
