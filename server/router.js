const router = require('express').Router();

router.get('/', function (req, res) {
  res.send('KK, got your request');
});

module.exports = router;
