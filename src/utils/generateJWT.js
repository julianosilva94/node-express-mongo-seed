import jwt from 'jsonwebtoken';

const generateJWT = (params = {}) => jwt.sign(params, process.env.JWT_SECRET, {
  expiresIn: process.env.JWT_EXPIRATION || 84600,
});

export default generateJWT;
