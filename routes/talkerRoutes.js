const express = require('express');
const getAllTalkers = require('../controllers/getAllTalkers');
const getTalkerById = require('../controllers/talkerById');
const { nameValidation, ageValidation, talkValidation, rateValidation, dataValidation,
tokenValidation } = require('../middlewares/talkerValidation');
const createUser = require('../controllers/createUser');
const searchUser = require('../controllers/searchUser');
const deleteUser = require('../controllers/deleteUser');
const editUser = require('../controllers/editUser');

const router = express.Router();

router.get('/', getAllTalkers);
router.post('/', tokenValidation, nameValidation, ageValidation, talkValidation, dataValidation, 
rateValidation, createUser);
router.get('/search', tokenValidation, searchUser);
router.get('/:id', getTalkerById);
router.put('/:id', nameValidation, ageValidation, talkValidation, dataValidation, 
rateValidation, tokenValidation, editUser);
router.delete('/:id', tokenValidation, deleteUser);

module.exports = router;
