import jwt from 'jsonwebtoken';
import CONFIG from '../config';

const { secret, expiresIn } = CONFIG.jwt;

const generateJWT = (params = {}) => jwt.sign(params, secret, { expiresIn });

export default generateJWT;
