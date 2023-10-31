const express = require('express');
const mongoose = require('mongoose');
const bookRoutes = require('./routes/bookRoutes');
const logger = require('./middleware/logger');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(logger); // Add logger middleware
app.use('/books', bookRoutes);

mongoose.connect(process.env.DB_URI, { useNewUrlParser: true, useUnifiedTopology: true });

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
