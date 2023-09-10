// Import required modules
import cors from 'cors';
import { fileURLToPath } from 'url';
import express from 'express';
import config from './src/configs/config.js';
import authRoute from './src/routes/authRoute.js';
import profileRoute from './src/routes/profileRoute.js';
import projectRoute from './src/routes/projectRoute.js';
import contactRoute from './src/routes/contactsQuery.js';
import errorHandler from './src/middleware/errorHandler.js';
import { CommonError } from './src/lib/api/error/commonError.js';
import { ApplicationError } from './src/lib/api/error/applicationError.js';

// Initialize the Express app
const app = express();

// Enable CORS for specified origin
app.use(
  cors({
    origin: config.appUrl,
  })
);

console.log('application url', config.appUrl);

// Parsing middleware
// Increase request body size limit
app.use(express.json({ limit: config.body_parser_limit }));
app.use(
  express.urlencoded({ limit: config.body_parser_limit, extended: true })
);

// Define routes for various API endpoints
app.use('/api/v1/contacts', contactRoute);
app.use('/api/v1/projects', projectRoute);
app.use('/api/v1/profile', profileRoute);

// Auth routes
app.use('/api/v1/auth', authRoute);

// Handle all unhandled routes by returning a RESOURCE_NOT_FOUND error
app.all('*', (req, res, next) => {
  next(new ApplicationError(CommonError.RESOURCE_NOT_FOUND));
});

// Error handling middleware
app.use(errorHandler);

// Export the Express app
export default app;
