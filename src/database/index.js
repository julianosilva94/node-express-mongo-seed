const mongoose = require('mongoose');

mongoose.set('useCreateIndex', true);
mongoose.connect(`mongodb://${process.env.MONGO_DB_URL}`, { useNewUrlParser: true })
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));
mongoose.Promise = global.Promise;

module.exports = mongoose;
