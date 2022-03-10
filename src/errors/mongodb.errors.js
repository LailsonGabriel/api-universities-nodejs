const notFoundError = (res) => {
  return res
    .status(404)
    .json({ message: 'Esse dado não foi encontrado no banco de dados' });
};

module.exports = { notFoundError };
