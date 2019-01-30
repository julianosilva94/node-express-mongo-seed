import { MongooseAutoIncrementID } from 'mongoose-auto-increment-reworked';
import timestamps from 'mongoose-unix-timestamp-plugin';

import mongoose from '../database';

const TodoSchema = new mongoose.Schema(
  {
    owner: {
      type: Number,
      required: true,
      ref: 'User',
    },
    content: {
      type: String,
      required: true,
    },
  },
  { versionKey: false },
);

TodoSchema.plugin(MongooseAutoIncrementID.plugin, { modelName: 'Todo' });
TodoSchema.plugin(timestamps);

const Todo = mongoose.model('Todo', TodoSchema);

export default Todo;
