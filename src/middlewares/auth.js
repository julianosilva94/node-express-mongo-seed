import jwt from 'jsonwebtoken';

import CONFIG from '../config';

export default (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization || authorization === '') {
    res.status(400).send({ error: 'Missing Authorization header' });
    return next();
  }

  jwt.verify(authorization, CONFIG.jwt.secret, (err, decoded) => {
    if (err) {
      res.status(401).send({ error: 'Invalid or expired JWT' });
      return next();
    }

    req.userId = decoded.id;

    return next();
  });

  return true;
};
