import app from './app.js';
import db from './src/db/db.js';
import config from './src/configs/config.js';

// connnect to database
db();

const { port } = config;

// Listening to the port
app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
