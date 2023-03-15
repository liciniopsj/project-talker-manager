const fs = require('fs').promises;
const getTalkerData = require('./getTalkerData');

const OK = 200;
const NOT_FOUND = 404;
const CREATED = 201;
const NO_CONTENT = 204;

const getAllTalkers = async (_req, res) => {
  const data = await getTalkerData();
  return res.status(OK).json(data);
};

const getTalkerById = async (req, res) => {
  const { id } = req.params;
  const data = await getTalkerData();
  const filteredData = data.find((talker) => talker.id === +id);
  if (!filteredData) {
    return res.status(NOT_FOUND).json({ message: 'Pessoa palestrante não encontrada' });
  }
    return res.status(OK).json(filteredData);
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

const editTalker = async (req, res) => {
  const { id: paramId } = req.params;
  const data = await getTalkerData();
  const talkerToEdit = data.find((talker) => talker.id === +paramId);
  if (!talkerToEdit) {
    return res
      .status(NOT_FOUND)
      .json({ message: 'Pessoa palestrante não encontrada' });
  }
  const index = data.indexOf(talkerToEdit);
  const EditedTalker = { id: +paramId, ...req.body };
  data.splice(index, 1, EditedTalker);
  await fs.writeFile('src/talker.json', JSON.stringify(data, null, 2));
  return res.status(OK).json(EditedTalker);
};

const deleteTalker = async (req, res) => {
  const { id } = req.params;
  const data = await getTalkerData();
  const talkerToDelete = data.findIndex((talker) => talker.id === +id);
  data.splice(talkerToDelete, 1);
  await fs.writeFile('src/talker.json', JSON.stringify(data, null, 2));
  return res.status(NO_CONTENT).end();
};

const searchTalker = async (req, res) => {
  const { q } = req.query;
  const data = await getTalkerData();
  if (!q) {
    return res.status(OK).json(data);
  }
  const filteredData = data.filter((talker) => talker.name.includes(q));
  return res.status(OK).json(filteredData);
};

module.exports = {
  getAllTalkers,
  getTalkerById,
  addNewTalker,
  editTalker,
  deleteTalker,
  searchTalker,
};