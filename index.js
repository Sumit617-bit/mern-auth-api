const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const authRoutes = require('./routes/auth');

const app = express();

app.use(cors());
app.use(express.json());

// ✅ Register root route first
app.get("/", (req, res) => {
  res.send("API is running...");
});

// ✅ Register API routes
app.use('/api/auth', authRoutes);

// ✅ MongoDB connect and server start
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(5000, () =>
      console.log('🚀 Server running on http://localhost:5000')
    );
  })
  .catch(err => console.log("❌ MongoDB Error:", err));
