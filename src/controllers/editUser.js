const FILE_NAME = 'talker.json';
const fs = require('fs/promises');

async function editUser(req, res) {
    try {
      const { id } = req.params;
      const { name, age, talk } = req.body;
    
      const data = await fs.readFile(FILE_NAME);
      const response = JSON.parse(data);
    
      const talkerIndex = response.findIndex((e) => +e.id === +id);
      const newUser = { id: +id, name, age, talk };
      response[talkerIndex] = newUser;
      response.sort((a, b) => a.id - b.id);
  
      await fs.writeFile(FILE_NAME, JSON.stringify(response));
      return res.status(200).json(newUser);
    } catch (error) {
      console.log(error);
    }
}

module.exports = editUser;