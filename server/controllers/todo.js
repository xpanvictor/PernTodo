const connectDB = require('../database/db');
const customError = require('../errors/customError');

class Todo {
  constructor(req, res, next) {
    this.req = req;
    this.res = res;
    this.next = next;
  }

  async GetAll() {
    await connectDB
      .query('SELECT * FROM todo')
      .then((data) => this.res.json(data.rows))
      .catch((err) => this.next(customError.databaseErr(err.errno, err.code)));
  }

  async PostOne() {
    const { todo_name, scale, due_time, description } = this.req.body;
    if (!todo_name) {
      this.next(customError.badRequest('Todo name must be defined'));
      return;
    }
    await connectDB
      .query(
        'INSERT INTO todo (todo_name, scale, due_time, description) VALUES ($1, $2, $3, $4) RETURNING tid',
        [todo_name, scale, due_time, description],
      )
      .then((data) => this.res.json(data.rows[0]))
      .catch((err) => this.next(customError.databaseErr(err.errno, err.code)));
  }

  async DropAll() {
    await connectDB
      .query('TRUNCATE TABLE todo')
      .then((data) => this.res.json(data))
      .catch((err) => this.next(customError.databaseErr(err.errno, err.code)));
  }
}

module.exports = Todo;
