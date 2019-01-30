import generateJWT from '../utils/generateJWT';
import UserService from '../services/user.service';

class AuthController {
  static login = async (req, res) => {
    const { email, password } = req.body;

    try {
      const user = await UserService.validateLogin(email, password);

      if (!user) {
        return res.status(401).send({ error: 'Wrong e-mail or password' });
      }

      const token = generateJWT({ id: user.id });

      const userJson = user.toObject();
      userJson.jwt = token;

      return res.send({ user: userJson });
    } catch (err) {
      return res.status(400).send({ error: 'Login failed' });
    }
  };

  static register = async (req, res) => {
    const { name, email, password } = req.body;

    try {
      const registered = await UserService.checkEmailIsRegistered(email);
      if (registered) {
        return res.status(409).send({ error: 'E-mail already registered' });
      }

      const user = await UserService.register(name, email, password);

      const token = generateJWT({ id: user.id });

      const userJson = user.toObject();
      userJson.jwt = token;

      return res.send({ user: userJson });
    } catch (err) {
      return res.status(400).send({ error: 'Registration failed' });
    }
  };
}

export default AuthController;
