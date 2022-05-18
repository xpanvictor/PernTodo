const express = require('express');
const router = require('./router');
const ApiErrorHandler = require('./errors/ApiErrorHandler');

const app = express();

// Middlewares
app.use(express.json());
app.use(ApiErrorHandler); // API error handling

// Routing
app.use('/api/', router);

const port = process.env.PORT || 5000;
app.listen(port, () => `App listening at port ${port}`);
