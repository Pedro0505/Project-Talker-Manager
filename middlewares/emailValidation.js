function emailValidation(req, res, next) {
  const { email } = req.body;
  const emailRgxExp = /[A-Za-z]*[@][A-Za-z]*[.]com/gi;

  if (!email || email.length === 0) {
    return res.status(400).json({ message: 'O campo "email" é obrigatório' });
  }
  if (!emailRgxExp.test(email)) {
    return res.status(400).json({ message: 'O "email" deve ter o formato "email@email.com"' });
  }
  next();
}

module.exports = emailValidation;