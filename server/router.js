const router = require('express').Router();
const Todo = require('./controllers/todo');

router.get('/', (...args) => new Todo(...args).GetAll());

module.exports = router;
