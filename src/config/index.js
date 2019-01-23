import dotenv from 'dotenv';

dotenv.config();

const {
  PORT, JWT_SECRET, JWT_EXPIRATION, DB_DRIVER, DB_HOST, DB_PORT, DB_SCHEMA,
} = process.env;

export default {
  server: {
    port: PORT,
  },
  jwt: {
    secret: JWT_SECRET,
    expiresIn: JWT_EXPIRATION,
  },
  db: {
    driver: DB_DRIVER,
    host: DB_HOST,
    port: DB_PORT,
    schema: DB_SCHEMA,
  },
};
