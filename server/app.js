import express from 'express';
import contactRoute from './src/routes/contactsQuery.js';
import projectRoute from './src/routes/projectRoute.js';
import errorHandler from './src/middleware/errorHandler.js';
import { CommonError } from './src/lib/api/error/commonError.js';
import { ApplicationError } from './src/lib/api/error/applicationError.js';

// Initializing the express app
const app = express();

// parsing
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

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
