import express from 'express';
import statusCodes from './src/constants/statusCodes.js';

// Initializing the express app
const app = express();

// parsing
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// handling all the unhandled routes
app.all('*', (req, res, next) => {
  next(
    new AppError(
      `Can't find Method:${req.method}, URL:${req.originalUrl} on this server`,
      statusCodes.NOT_FOUND
    )
  );
});

export default app;
