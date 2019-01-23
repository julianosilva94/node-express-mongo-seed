import { Router } from 'express';

import authRouter from './auth';

const rootRouter = Router();

rootRouter.get('/', async (req, res) => {
  res.send({ message: 'API Working' });
});

export default (app) => {
  app.use(rootRouter);
  app.use('/auth', authRouter);
};
