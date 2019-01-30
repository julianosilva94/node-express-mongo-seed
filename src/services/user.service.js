import bcrypt from 'bcryptjs';

import User from '../models/user';

class UserService {
  static validateLogin = async (email, password) => {
    const user = await User.findOne({ email }).select('+password');

    if (!user) {
      return false;
    }

    if (!(await bcrypt.compare(password, user.password))) {
      return false;
    }

    user.password = undefined;

    return user;
  };

  static checkEmailIsRegistered = async (email) => {
    const user = await User.findOne({ email });

    return !!user;
  };

  static register = async (name, email, password) => {
    const hash = await bcrypt.hash(password, 10);

    const user = new User({
      name,
      email,
      password: hash,
    });

    await user.save();
    user.password = undefined;

    return user;
  };
}

export default UserService;
