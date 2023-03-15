const express = require('express');
const talkerRouter = express.Router();
const { validateTalkerProps, validateToken } = require('../middlewares/validateProps')
const { 
  getAllTalkers,
  getTalkerById,
  addNewTalker,
  editTalker,
  deleteTalker,
  searchTalker
} = require('../functions/talkerFunctions');


talkerRouter
  .get('/search',validateToken, searchTalker)
  .get('/', getAllTalkers)
  .get('/:id', getTalkerById)
  .post('/', validateToken, validateTalkerProps, addNewTalker)
  .put('/:id', validateToken, validateTalkerProps, editTalker )
  .delete('/:id', validateToken, deleteTalker);

  module.exports = talkerRouter;
