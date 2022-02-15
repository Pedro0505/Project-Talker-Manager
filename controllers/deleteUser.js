const FILE_NAME = 'talker.json';
const fs = require('fs/promises');

async function deleteUser(req, res) {
  const { id } = req.params;

  const data = await fs.readFile(FILE_NAME);
  const response = JSON.parse(data);

  const found = response.filter((e) => +e.id !== +id);
  await fs.writeFile(FILE_NAME, JSON.stringify(found));
  return res.status(204).end();
}

module.exports = deleteUser;
