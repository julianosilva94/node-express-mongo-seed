import TodoService from '../services/todo';

class TodoController {
  static getAll = async (req, res) => {
    try {
      const todos = await TodoService.getAllByOwner(req.userId);

      return res.send({ todos });
    } catch (err) {
      return res.status(400).send({ error: 'List todos failed ' });
    }
  };

  static getById = async (req, res, next) => {
    const { id } = req.params;

    try {
      const todo = await TodoService.getByOwnerAndId(req.userId, id);

      if (!todo) {
        return res.status(404).send();
      }

      res.send({ todo });

      return next();
    } catch (err) {
      return res.status(400).send({ error: 'Get todo failed ' });
    }
  };

  static create = async (req, res) => {
    const { content } = req.body;

    try {
      const todo = await TodoService.create(req.userId, content);

      return res.status(201).send({ todo });
    } catch (err) {
      return res.status(400).send({ error: 'Create todo failed ' });
    }
  };

  static update = async (req, res) => {
    const { id } = req.params;

    const { content } = req.body;

    try {
      const todo = await TodoService.update(req.userId, id, content);

      return res.send({ todo });
    } catch (err) {
      return res.status(400).send({ error: 'Update todo failed ' });
    }
  };

  static remove = async (req, res) => {
    const { id } = req.params;

    try {
      await TodoService.remove(req.userId, id);

      return res.status(204).send();
    } catch (err) {
      return res.status(400).send({ error: 'Remove todo failed ' });
    }
  };
}

export default TodoController;
