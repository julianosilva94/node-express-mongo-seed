import Todo from '../models/todo';

class TodoService {
  static getAllByOwner = async (owner) => {
    const todos = await Todo.find({ owner });

    return todos;
  };

  static getByOwnerAndId = async (owner, id) => {
    const todo = await Todo.findOne({ owner, _id: id });

    return todo;
  };

  static create = async (owner, content) => {
    const todo = new Todo({ owner, content });

    await todo.save();

    return todo;
  };

  static update = async (owner, id, content) => {
    const todo = await Todo.findOne({ owner, _id: id });

    todo.content = content;
    await todo.save();

    return todo;
  };

  static remove = async (owner, id) => {
    const todo = await Todo.findOne({ owner, _id: id });

    await todo.remove();

    return true;
  };
}

export default TodoService;
