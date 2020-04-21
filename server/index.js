const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
require('./services/passport');
const authRoutes = require('./routes/authRoutes');

//Mount Routes
app.use('/auth/google', authRoutes);

//Start Server
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
