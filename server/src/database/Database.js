const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost/resumidos", {
  useNewUrlParser: true,
  useFindAndModify: true,
  useCreateIndex: true
})

mongoose.connection.on('error', console.error);
mongoose.connection.once('open', () => console.log('Successful Connection to MongoDB!'));

module.exports = { mongoose }
