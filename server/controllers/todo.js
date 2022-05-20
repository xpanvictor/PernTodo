const connectDB = require('../database/db');
const customError = require('../errors/customError');

class Todo {
  constructor(req, res, next) {
    this.req = req;
    this.res = res;
    this.next = next;
  }

  checkRes(data) {
    if (data.rowCount === 0) {
      return this.next(customError.NotFound("The data can't be found"));
    }
    return this.res.json(data.rows);
  }

  // GET all todo
  async GetAll() {
    await connectDB
      .query('SELECT * FROM todo')
      .then((data) => this.checkRes(data))
      .catch((err) => this.next(customError.databaseErr(err.errno, err.code)));
  }

  // GET one todo
  async GetOne() {
    const { tid } = this.req.params;
    await connectDB
      .query('SELECT * FROM todo WHERE tid = $1', [tid])
      .then((data) => this.checkRes(data))
      .catch((err) => this.next(customError.databaseErr(err.errno, err.code)));
  }

  // POST one todo
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

  // PUT one todo
  async PutOne() {
    const { tid } = this.req.params;
    const { todo_name, scale, due_time, description } = this.req.body;

    await connectDB
      .query(
        'UPDATE todo SET (todo_name, scale, due_time, description) = ($1, $2, $3, $4) where tid = $5',
        [todo_name, scale, due_time, description, tid],
      )
      .then(() => this.res.status(201).json('Updated successfully'))
      .catch((err) => this.next(customError.databaseErr(err.code, err.error)));
  }

  async DeleteOne() {
    const { tid } = this.req.params;
    await connectDB
      .query('DELETE FROM todo where tid = $1', [tid])
      .then(() => {
        this.res.status(201).json('Success in deleting');
      })
      .catch((err) => this.next(customError.databaseErr(err.code, err.error)));
  }

  async DropAll() {
    await connectDB
      .query('TRUNCATE TABLE todo')
      .then((data) => this.res.json(data))
      .catch((err) => this.next(customError.databaseErr(err.errno, err.code)));
  }
}

module.exports = Todo;
