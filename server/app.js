import express from 'express';
// import bodyParser from 'body-parser';
import config from './src/configs/config.js';
import projectRoute from './src/routes/projectRoute.js';
import contactRoute from './src/routes/contactsQuery.js';
import errorHandler from './src/middleware/errorHandler.js';
import { CommonError } from './src/lib/api/error/commonError.js';
import { ApplicationError } from './src/lib/api/error/applicationError.js';

// Initializing the express app
const app = express();

// parsing
// Increase request body size limit
app.use(express.json({ limit: config.body_parser_limit }));
app.use(
  express.urlencoded({ limit: config.body_parser_limit, extended: true })
);

// Routes
app.use('/api/v1/contacts', contactRoute);
app.use('/api/v1/projects', projectRoute);

// handling all the unhandled routes
app.all('*', (req, res, next) => {
  next(new ApplicationError(CommonError.RESOURCE_NOT_FOUND));
});

// handle error
app.use(errorHandler);

export default app;
