const express = require('express');
const dotenv = require('dotenv');
const errorMiddleware = require('./src/middlewares/errorMiddleware');

const connectToDatabase = require('.//src/database/mongoose.database');

dotenv.config();

const app = express();
app.use(express.json());

connectToDatabase();

const universitiesRoutes = require('./src/routes/universitiesRoutes');
app.use('/universities', universitiesRoutes);

app.use(errorMiddleware);

app.listen(8000, () => {
  console.log('Listening on port 8000!');
});

module.exports = app;
