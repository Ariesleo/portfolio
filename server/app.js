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

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Initializing the express app
const app = express();

app.use(
  cors({
    origin: config.appUrl,
  })
);

// Parsing
// Increase request body size limit
app.use(express.json({ limit: config.body_parser_limit }));
app.use(
  express.urlencoded({ limit: config.body_parser_limit, extended: true })
);

// When a GET request is made to any route ('/*' matches any URL),
// send the 'index.html' file located in the 'build' directory.
// This is basically used so that the route is possible in the frontendsection
app.use(express.static(path.join(__dirname, 'build')));
app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// Routes
app.use('/api/v1/contacts', contactRoute);
app.use('/api/v1/projects', projectRoute);
app.use('/api/v1/profile', profileRoute);

// Auth
app.use('/api/v1/auth', authRoute);

// Handling all the unhandled routes
app.all('*', (req, res, next) => {
  next(new ApplicationError(CommonError.RESOURCE_NOT_FOUND));
});

// Handle errors
app.use(errorHandler);

export default app;
