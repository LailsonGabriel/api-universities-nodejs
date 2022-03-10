const { Schema, model } = require('mongoose');

const UniversitySchema = Schema({
  country: String,
  name: String,
  domains: Array,
  alpha_two_code: String,
  'state-province': String,
  web_pages: Array,
});

const UniversityModel = model('University', UniversitySchema);

module.exports = UniversityModel;
