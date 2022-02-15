const FILE_NAME = 'talker.json';
const fs = require('fs/promises');

async function searchUser(req, res) {
  const { q } = req.query;

  const data = await fs.readFile(FILE_NAME);
  const response = JSON.parse(data);

  const filterUser = response.filter((e) => e.name.includes(q));

  return res.status(200).json(filterUser);
}

module.exports = searchUser;
