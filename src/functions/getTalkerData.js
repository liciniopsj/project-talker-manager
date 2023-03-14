const express = require('express');
const fs = require('fs').promises;

const getTalkerData = async () => {
  const data = await fs.readFile('src/talker.json', 'utf-8');
  return JSON.parse(data);
};

module.exports = getTalkerData;