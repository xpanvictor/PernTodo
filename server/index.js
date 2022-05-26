require('dotenv').config();
const express = require('express');
const cors = require('cors');
const todoRouter = require('./routes/todo');
const ApiErrorHandler = require('./middlewares/ApiErrorHandler');
const Logger = require('./middlewares/logger');

const app = express();

// Middlewares
app.use(express.json());
app.use(cors());
app.use(Logger);
// Routing
app.use('/api/todo', todoRouter);

app.use(ApiErrorHandler); // API error handling
const port = process.env.PORT || 5000;
app.listen(port, () => `App listening at port ${port}`);
