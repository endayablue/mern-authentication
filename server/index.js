const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv'); // Import the dotenv package

dotenv.config(); // Load environment variables from .env file

const app = express();
const port = process.env.PORT || 3000;

// Use environment variables for MongoDB URI and JWT Secret
const dbURI = process.env.MONGODB_URI; // MongoDB connection URI
const jwtSecret = process.env.JWT_SECRET; // JWT Secret Key

// Connect to MongoDB
mongoose.connect(dbURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', (error) => {
  console.error('MongoDB connection error:', error);
});
db.once('open', () => {
  console.log('Connected to MongoDB');
});

// Your other middleware and routes go here

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
