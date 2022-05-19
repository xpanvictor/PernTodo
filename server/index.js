const express = require('express');
const router = require('./router');
const ApiErrorHandler = require('./middlewares/ApiErrorHandler');

const app = express();

// Middlewares
app.use(express.json());
// Routing
app.use('/api/', router);

app.use(ApiErrorHandler); // API error handling
const port = process.env.PORT || 5000;
app.listen(port, () => `App listening at port ${port}`);
