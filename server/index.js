const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = process.env.PORT || 5000;
const keys = require('./config/keys');
require('./models/User');
require('./services/passport');
const authRoutes = require('./routes/authRoutes');

//Connect to DB
mongoose.connect(
  keys.mongoURL,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log('Connected to DB');
  }
);

//Mount Routes
app.use('/auth/google', authRoutes);

//Start Server
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
