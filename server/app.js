import express from 'express';
import statusCodes from './src/constants/statusCodes.js';
import contactRoute from './src/routes/contactsQuery.js';
import errorHandler from './src/middleware/errorHandler.js';
import { ApplicationError } from './src/lib/api/error/applicationError.js';
import { CommonError } from './src/lib/api/error/commonError.js';

// Initializing the express app
const app = express();

// parsing
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api/v1/contact', contactRoute);

// handling all the unhandled routes
app.all('*', (req, res, next) => {
  next(new ApplicationError(CommonError.RESOURCE_NOT_FOUND));
});

// handle error
app.use(errorHandler);

export default app;
