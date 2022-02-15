const FILE_NAME = 'talker.json';
const fs = require('fs/promises');

async function getAllTalkers(req, res) {
  const data = await fs.readFile(FILE_NAME);
  const response = JSON.parse(data);

  if (response.length === 0) return res.status(200).json([]);
  
  return res.status(200).json(response);
}

module.exports = getAllTalkers;
