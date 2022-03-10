const express = require('express');
const router = express.Router();
const rescue = require('express-rescue');

const {
  getUniversities,
  getById,
  createUniversity,
  updateUniversity,
  deletedUniversity,
} = require('../controllers/university.controller');

const {
  verifyFields,
  verifyExistUniversity,
} = require('../middlewares/postUniversity.middleware');

router.get('/', getUniversities);
router.get('/:id', getById);
router.post('/', verifyFields, verifyExistUniversity, createUniversity);
router.put('/:id', verifyFields, updateUniversity);
router.delete('/:id', deletedUniversity);

module.exports = router;
