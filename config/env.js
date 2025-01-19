const dotenv = require('dotenv');

// Load environment variables from a .env file
dotenv.config();

const env = {
  NODE_ENV: process.env.NODE_ENV || 'development',
  PORT: process.env.PORT || 3000,
  DB_URI: process.env.DB_URI || 'mongodb://localhost:27017/seekers',
  JWT_SECRET: process.env.JWT_SECRET || 'your_jwt_secret',
  JWT_EXPIRATION: process.env.JWT_EXPIRATION || '1h',
  API_PREFIX: process.env.API_PREFIX || '/api',
};

module.exports = env;
