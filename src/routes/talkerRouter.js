const express = require('express');
const talkerRouter = express.Router();
const { 
  getAllTalkers,
  getTalkerById
} = require('../functions/talkerFunctions');


talkerRouter
  .get('/', getAllTalkers)
  .get('/:id', getTalkerById);

  module.exports = talkerRouter;
