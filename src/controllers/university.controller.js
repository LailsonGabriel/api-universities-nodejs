const { notFoundError } = require('../errors/mongodb.errors');
const rescue = require('express-rescue');

const {
  getAllUniversities,
  getUniversityById,
  postUniversity,
  putUniversity,
  destroyUniversity,
} = require('../services/university.service');

const getUniversities = rescue(async (req, res) => {
  const page = parseInt(req.params.page || '1');
  const { country } = req.query;

  const universities = await getAllUniversities(page, country);
  res.status(200).json(universities);
});

const getById = rescue(async (req, res) => {
  const { id } = req.params;
  const university = await getUniversityById(id);

  if (!university) return notFoundError(res);

  res.status(200).json(university);
});

const createUniversity = rescue(async (req, res) => {
  const create = await postUniversity(req.body);

  res.status(201).json(create);
});

const updateUniversity = rescue(async (req, res) => {
  const { id } = req.params;
  const university = await putUniversity(id, req.body);

  if (!university) return notFoundError(res);

  res.status(200).json(university);
});

const deletedUniversity = rescue(async (req, res) => {
  const { id } = req.params;

  const deleted = await destroyUniversity(id);

  if (!deleted) return notFoundError(res);

  res.status(200).json({ message: 'Universidade Deletada com Sucesso!' });
});

module.exports = {
  getUniversities,
  getById,
  createUniversity,
  updateUniversity,
  deletedUniversity,
};
