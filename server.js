const express = require('express');
const mongoose = require('mongoose');
const postRoutes = require('./routes/postRoutes');
const connectDB = require('./config/db');

const app = express();

app.use(express.json());

// Connect DB
connectDB();


app.use('/', postRoutes);


const PORT = 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});