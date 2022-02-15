const crypto = require('crypto');
// Ref: https://app.betrybe.com/course/back-end/introducao-ao-desenvolvimento-web-com-nodejs/express-http-com-nodejs/8022a9b1-7548-4298-97ce-9acfa8986e66/exercicios/21929471-d075-4c23-81a2-9d1d07d0cc6b/bonus/ce9467f4-4361-446e-8fa3-1b230b6d426e?use_case=side_bar
function generateToken() {
  return crypto.randomBytes(8).toString('hex');
}

function login(_req, res) {
  return res.status(200).json({ token: generateToken() });
}

module.exports = login;
