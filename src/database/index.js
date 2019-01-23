import mongoose from 'mongoose';
import CONFIG from '../config';

mongoose.set('useCreateIndex', true);
mongoose
  .connect(
    `${CONFIG.db.driver}://${CONFIG.db.host}:${CONFIG.db.port}/${CONFIG.db.schema}`,
    { useNewUrlParser: true },
  )
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));
mongoose.Promise = global.Promise;

module.exports = mongoose;
