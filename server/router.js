const router = require('express').Router();
const Todo = require('./controllers/todo');

// This routing uses spread operator to handle fetching
// Get All Todos
router.get('/', (...args) => new Todo(...args).GetAll());

router.post('/todo', (...args) => new Todo(...args).PostOne());

module.exports = router;
