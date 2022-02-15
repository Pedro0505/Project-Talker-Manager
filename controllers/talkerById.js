const FILE_NAME = 'talker.json';
const fs = require('fs/promises');

async function getTalkerById(req, res) {
  try {
    const { id } = req.params;

    const data = await fs.readFile(FILE_NAME);
    const response = JSON.parse(data);
  
    const findTalker = response.find((e) => e.id === +id);
  
    if (!findTalker) {
      return res.status(404).json({ message: 'Pessoa palestrante não encontrada' });
    }
  
    return res.status(200).json(findTalker);
  } catch (error) {
    console.log(error);
  }
}

module.exports = getTalkerById;
