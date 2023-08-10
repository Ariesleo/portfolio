import express from 'express';
import statusCodes from './src/constants/statusCodes.js';
import contactRoute from './src/routes/contactsQuery.js';
import errorHandler from './src/middleware/errorHandler.js';

// Initializing the express app
const app = express();

// parsing
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api/v1/protfolio', contactRoute);

// handling all the unhandled routes
app.all('*', (req, res, next) => {
  next(
    new AppError(
      `Can't find Method:${req.method}, URL:${req.originalUrl} on this server`,
      statusCodes.NOT_FOUND
    )
  );
});

// handle error
app.use(errorHandler);

export default app;
