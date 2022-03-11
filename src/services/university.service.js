const UniversityModel = require('../models/university.model');

String.prototype.capitalize = function () {
  return this.charAt(0).toUpperCase() + this.substr(1);
};

const getAllUniversities = async (query) => {
  const convertedQuery = query.capitalize();
  const noQuery = await UniversityModel.find(
    {},
    { name: 1, country: 1, 'state-province': 1 },
  );

  const Squery = await UniversityModel.find(
    { country: convertedQuery },
    { name: 1, country: 1, 'state-province': 1 },
  );

  return query ? Squery : noQuery;
};

const getUniversityById = async (id) => UniversityModel.findById(id);

const postUniversity = async (university) => {
  const newUniversity = new UniversityModel(university);

  await newUniversity.save();

  return newUniversity;
};

const checkIfExists = async (id) => {
  const exist = await getUniversityById(id);

  if (!exist) return false;

  return true;
};

const putUniversity = async (id, data) => {
  const exist = await checkIfExists(id);

  if (!exist) return false;

  const updatedTask = await UniversityModel.findByIdAndUpdate(id, data);

  return { ...updatedTask._doc, ...data };
};

const destroyUniversity = async (id) => {
  const exist = await checkIfExists(id);

  if (!exist) return false;

  const deletedUniversity = await UniversityModel.findByIdAndDelete(id);

  return deletedUniversity;
};

module.exports = {
  getAllUniversities,
  getUniversityById,
  postUniversity,
  putUniversity,
  destroyUniversity,
};
