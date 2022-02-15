const FILE_NAME = 'talker.json';
const fs = require('fs/promises');

async function createUser(req, res) {
  try {
    const { name, age, talk } = req.body;

    const data = await fs.readFile(FILE_NAME);
    const response = JSON.parse(data);
    const newUser = { name, id: response.length + 1, age, talk };
  
    response.push(newUser);
    await fs.writeFile(FILE_NAME, JSON.stringify(response));
    return res.status(201).json({ id: response.length + 1, ...newUser });
  } catch (error) {
    console.log(error);
  }
}

module.exports = createUser;
