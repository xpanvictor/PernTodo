class Todo {
  constructor(req, res, next) {
    this.req = req;
    this.res = res;
    this.next = next;
  }

  GetAll() {
    this.res.send(this.req.headers);
  }
}

module.exports = Todo;
