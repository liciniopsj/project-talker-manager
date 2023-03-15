const express = require('express');
const talkerRouter = express.Router();
const { validateTalkerProps, validateToken } = require('../middlewares/validateProps')
const { 
  getAllTalkers,
  getTalkerById,
  addNewTalker,
  editTalker,
  deleteTalker
} = require('../functions/talkerFunctions');


talkerRouter
  .get('/', getAllTalkers)
  .get('/:id', getTalkerById)
  .put('/:id', validateToken, validateTalkerProps, editTalker )
  .delete('/:id', validateToken, deleteTalker)
  .post('/', validateToken, validateTalkerProps, addNewTalker);

  module.exports = talkerRouter;
