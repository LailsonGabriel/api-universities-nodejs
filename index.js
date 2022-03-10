const express = require('express');
const dotenv = require('dotenv');

const connectToDatabase = require('.//src/database/mongoose.database');
const UniversityModel = require('./src/models/university.model');

dotenv.config();

const app = express();

connectToDatabase();

app.get('/', async (req, res) => {
  const universities = await UniversityModel.find({});
  res.status(200).json(universities);
});

app.listen(8000, () => {
  console.log('Listening on port 8000!');
});
