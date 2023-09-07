import dotenv from 'dotenv';
dotenv.config();

const { env } = process;

const config = {
  port: env.PORT || 8080,
  dbUrl: env.DATABASE_URL,
  secretKey: env.SECRETKEY,
  node_env: env.NODE_ENV,
  sendgrid_api_key: env.SENDGRID_API_KEY,
  from_email: env.FROM_EMAIL,
  to_email: env.TO_EMAIL,
  body_parser_limit: env.BODY_PARSER_LIMIT,

  // USER INFORMATION
  userName: env.USER_NAME,
  userPassword: env.USER_PASSWORD,

  // jwt
  jwtSecret: env.JWT_SECRET,
  jwtLifetime: env.JWT_LIFETIME,

  // url
  appUrl: env.APP_URL,
};

export default config;
