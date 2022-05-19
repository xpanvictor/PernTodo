const connectDB = require('../database/db');
const customError = require('../errors/customError');

class Todo {
  constructor(req, res, next) {
    this.req = req;
    this.res = res;
    this.next = next;
  }

  GetAll() {
    this.res.send(this.req.headers);
  }

  PostOne() {
    const { todo_name, scale, due_time, description } = this.req.body;
    if (!todo_name) {
      this.next(customError.badRequest('Todo name must be defined'));
      return;
    }
    this.res.status(201);
  }
}

module.exports = Todo;
