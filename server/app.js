// Import required modules
import cors from 'cors';
import path, { dirname } from 'path';
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

// Get the current filename and dirname using Node.js modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Initialize the Express app
const app = express();

// Enable CORS for specified origin
app.use(
  cors({
    origin: config.appUrl,
  })
);

// Parsing middleware
// Increase request body size limit
app.use(express.json({ limit: config.body_parser_limit }));
app.use(
  express.urlencoded({ limit: config.body_parser_limit, extended: true })
);

// Serve static files from the 'build' directory
app.use(express.static(path.join(__dirname, 'build')));

// Define routes for various API endpoints
app.use('/api/v1/contacts', contactRoute);
app.use('/api/v1/projects', projectRoute);
app.use('/api/v1/profile', profileRoute);

// Auth routes
app.use('/api/v1/auth', authRoute);

// For any GET request to any route ('/*' matches any URL), send the 'index.html' file
// located in the 'build' directory. This is common in single-page applications (SPAs).
app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// Handle all unhandled routes by returning a RESOURCE_NOT_FOUND error
app.all('*', (req, res, next) => {
  next(new ApplicationError(CommonError.RESOURCE_NOT_FOUND));
});

// Error handling middleware
app.use(errorHandler);

// Export the Express app
export default app;
