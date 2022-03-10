const mongoose = require('mongoose');

const connectToDatabase = async () => {
  await mongoose.connect(
    `mongodb://localhost:27017/universitiesDB`,
    (error, db) => {
      if (error) {
        return console.log(`Could not connect to MongoDB: ${error.message}`);
      }
      return console.log('Connected to MongoDB!');
    },
  );
};

module.exports = connectToDatabase;
