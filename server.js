const express = require('express');
const mongoose = require('mongoose');
const postRoutes = require('./routes/postRoutes');
const connectDB = require('./config/db');

const app = express();

// Middleware to parse JSON
app.use(express.json());

// Connect DB
connectDB();

// Routes
app.use('/', postRoutes);


const PORT = 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
