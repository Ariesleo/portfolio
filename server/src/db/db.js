import mongoose from 'mongoose';
import config from '../configs/config.js';

const db = async () => {
  const DB = config.dbUrl;

  if (!DB) {
    console.error(`DB is ${DB}. Check your DB connection`);
  } else {
    try {
      await mongoose.connect(DB).then(() => {
        console.log('DB connected successfully!');
      });
    } catch (err) {
      console.error(err);
    }
  }
};

export default db;
