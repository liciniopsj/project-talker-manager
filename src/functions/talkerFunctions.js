const getTalkerData = require('../functions/getTalkerData');

const OK = 200;
const NOT_FOUND = 404;

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

module.exports = {
  getAllTalkers,
  getTalkerById
};