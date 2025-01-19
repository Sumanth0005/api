const mongoose = require('mongoose');

const connectToDatabase = async () => {
  try {
    const dbURI = process.env.DB_URI || 'mongodb://localhost:27017/seekers';
    await mongoose.connect(dbURI);
    console.log('Connected to the database successfully!');
  } catch (error) {
    console.error('Failed to connect to the database:', error.message);
    process.exit(1); // Exit process with failure
  }
};

module.exports = connectToDatabase;
