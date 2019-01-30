import { Router } from 'express';
import TodoController from '../controllers/todo.controller';

import authMiddleware from '../middlewares/authorization';

const router = Router();

router.use(authMiddleware);

router.get('', TodoController.getAll);
router.get('/:id', TodoController.getById);
router.post('', TodoController.create);
router.put('/:id', TodoController.update);
router.delete('/:id', TodoController.remove);

export default router;
