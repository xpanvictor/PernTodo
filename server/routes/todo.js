const todoRouter = require('express').Router();
const Todo = require('../controllers/todo');

// This routing uses spread operator to handle fetching
// Get All Todos
todoRouter.get('/', (...args) => new Todo(...args).GetAll());

// Post a Todo
todoRouter.post('/', (...args) => new Todo(...args).PostOne());

// Drop all todos
todoRouter.delete('/', (...args) => new Todo(...args).DropAll());

module.exports = todoRouter;
