const express = require('express');

const talkerRouter = express.Router();
const { validateAge,
  validateName,
  validateTalk,
  validateToken,
  validateTalkRate } = require('../middlewares/validateProps');
const { 
  getAllTalkers,
  getTalkerById,
  addNewTalker,
  editTalker,
  deleteTalker,
  searchTalker,
} = require('../functions/talkerFunctions');

talkerRouter
  .get('/search', validateToken, searchTalker)
  .get('/', getAllTalkers)
  .get('/:id', getTalkerById)
  .post('/',
    validateToken,
    validateAge,
    validateName,
    validateTalk,
    validateTalkRate,
    addNewTalker)
  .put('/:id',
    validateToken,
    validateAge,
    validateName,
    validateTalk,
    validateTalkRate,
    editTalker)
  .delete('/:id', validateToken, deleteTalker);

  module.exports = talkerRouter;
