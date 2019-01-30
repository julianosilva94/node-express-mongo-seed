import { MongooseAutoIncrementID } from 'mongoose-auto-increment-reworked';
import timestamps from 'mongoose-unix-timestamp-plugin';

import mongoose from '../database';

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: true,
      select: false,
    },
  },
  { versionKey: false },
);

UserSchema.plugin(MongooseAutoIncrementID.plugin, { modelName: 'User' });
UserSchema.plugin(timestamps);

const User = mongoose.model('User', UserSchema);

export default User;
