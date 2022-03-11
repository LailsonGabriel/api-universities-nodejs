const UniversityModel = require('../models/university.model');

function firstLetterUpperCase(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

const getAllUniversities = async (page, country) => {
  const sizeSkip = 20 * (page - 1);

  if (country) {
    const convertedQuery = firstLetterUpperCase(country);
    const result = await UniversityModel.find(
      { country: convertedQuery },
      { name: 1, country: 1, 'state-province': 1 },
    )
      .skip(sizeSkip)
      .limit(20);

    return [
      ...result,
      {
        previousPage: `http://localhost:8000/universities?page=${
          page === 1 ? 1 : page - 1
        }&country=${country}`,
        nextPage: `http://localhost:8000/universities?page=${
          page + 1
        }&country=${country}`,
      },
    ];
  }

  const result = await UniversityModel.find(
    {},
    { name: 1, country: 1, 'state-province': 1 },
  )
    .skip(sizeSkip)
    .limit(20);

  return [
    ...result,
    {
      previousPage: `http://localhost:8000/universities?page=${
        page === 1 ? 1 : page - 1
      }`,
      nextPage: `http://localhost:8000/universities?page=${page + 1}`,
    },
  ];
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
