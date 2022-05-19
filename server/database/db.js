const { Pool } = require('pg');

const connectDB = new Pool({
  database: 'perntodo',
  user: 'postgres',
  password: 'spyder369',
  host: 'localhost',
  port: 8080,
});

module.exports = connectDB;
