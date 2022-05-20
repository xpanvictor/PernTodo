const todoRouter = require('express').Router();
const Todo = require('../controllers/todo');

// This routing uses spread operator to handle fetching
// Get All Todos
todoRouter.get('/', (...args) => new Todo(...args).GetAll());

// Get One Todos
todoRouter.get('/:tid', (...args) => new Todo(...args).GetOne());

// Post a Todo
todoRouter.post('/', (...args) => new Todo(...args).PostOne());

// PUT a Todo
todoRouter.put('/:tid', (...args) => new Todo(...args).PutOne());

// Delete One todo
todoRouter.delete('/:tid', (...args) => new Todo(...args).DeleteOne());

// Drop all todos
todoRouter.delete('/', (...args) => new Todo(...args).DropAll());

module.exports = todoRouter;
