const { getAllUniversities } = require('../services/university.service');

const verifyFields = async (req, res, next) => {
  Object.keys(req.body).forEach((field) => {
    if (!req.body[field])
      return res.status(400).json('Preencha todos os campos');
  });

  next();
};

const verifyExistUniversity = async (req, res, next) => {
  const { country: cBody, name: nBody, 'state-province': sBody } = req.body;

  const universities = await getAllUniversities();

  if (
    universities.some(
      ({ country, name, 'state-province': state }) =>
        country === cBody && name === nBody && state === sBody,
    )
  ) {
    return res.status(400).json('Essa universidade já existe');
  }
  next();
};

module.exports = { verifyFields, verifyExistUniversity };
