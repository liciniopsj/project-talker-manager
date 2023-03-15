const getTalkerData = require('../functions/getTalkerData');
const fs = require('fs').promises;

const OK = 200;
const NOT_FOUND = 404;
const CREATED = 201;

const getAllTalkers = async (_req, res) => {
  const data = await getTalkerData();
  return res.status(OK).json(data);
};

const getTalkerById = async (req, res) => {
  const { id } = req.params;
  const data = await getTalkerData();
  const filteredData = data.find((talker) => talker.id === +id);
  if (!filteredData) {
    return res.status(NOT_FOUND).json({ message: 'Pessoa palestrante não encontrada' })
  } else {
    return res.status(OK).json(filteredData);
  };
};

const addNewTalker = async (req, res) => {
  const data = await getTalkerData();
  const [lastId] = data.slice(-1);
  const id = lastId.id + 1;
  const newTalker = { id, ...req.body };
  data.push(newTalker);
  await fs.writeFile('src/talker.json', JSON.stringify(data, null, 2));

  return res.status(CREATED).json(newTalker);
};

module.exports = {
  getAllTalkers,
  getTalkerById,
  addNewTalker
};