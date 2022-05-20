const { Pool } = require('pg');

const connectDB = new Pool();

module.exports = connectDB;
