require('dotenv').config();
console.log("MongoDB URI:", process.env.MONGO_URI); // Debugging line

const express = require('express');
const mongoose = require('mongoose');

const app = express();

// Check if the .env file is loaded properly
if (!process.env.MONGO_URI) {
  console.error("❌ MONGO_URI is not defined. Check your .env file.");
  process.exit(1); // Stop the server if there's no MongoDB connection string
}

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('✅ MongoDB Connected'))
.catch(err => console.error('❌ MongoDB Connection Error:', err));

app.listen(5000, () => console.log('🚀 Server running on port 5000'));
