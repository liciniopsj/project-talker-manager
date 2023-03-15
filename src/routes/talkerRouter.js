const express = require('express');
const talkerRouter = express.Router();
const validateTalkerProps = require('../middlewares/validateProps')
const { 
  getAllTalkers,
  getTalkerById,
  addNewTalker
} = require('../functions/talkerFunctions');


talkerRouter
  .get('/', getAllTalkers)
  .get('/:id', getTalkerById)
  .post('/', validateTalkerProps, addNewTalker);

  module.exports = talkerRouter;
