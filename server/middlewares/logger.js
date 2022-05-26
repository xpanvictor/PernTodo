const { appendFile, readFile, mkdir } = require('fs/promises');
const { existsSync } = require('fs');
const { join } = require('path');

async function Logger(req, res, next) {
  const loc = join(__dirname, '..', '/logs');
  if (!existsSync(loc)) {
    mkdir(loc);
  }
  await appendFile(join(loc, 'logs.txt'), `\n${req.headers['x-custom-key']}`);

  next();
}

module.exports = Logger;
