const UniversityModel = require('../models/university.model');

const getAllUniversities = async () => UniversityModel.find({});

const getUniversityById = async (id) => UniversityModel.findById(id);

const postUniversity = async (university) => {
  const newUniversity = new UniversityModel(university);

  await newUniversity.save();

  return newUniversity;
};

const putUniversity = async (id, data) => {
  const updatedTask = await UniversityModel.findByIdAndUpdate(id, data);

  return { ...updatedTask._doc, ...data };
};

const destroyUniversity = async (id) => {
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
