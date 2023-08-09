import dotenv from 'dotenv';
dotenv.config();

const { env } = process;

const config = {
  port: env.PORT || 8080,
  dbUrl: env.DATABASE_URL,
  secretKey: env.SECRETKEY,
  node_env: env.NODE_ENV,
};

export default config;
