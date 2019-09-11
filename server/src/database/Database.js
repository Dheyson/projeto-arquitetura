const mongoose = require("mongoose");

/*
mongoose.connect('mongodb+srv://admin:1234@cluster0-wtwy9.mongodb.net/test?retryWrites=true&w=majority',
    { useNewUrlParser: true });
*/


mongoose
  .connect("mongodb://192.168.0.99/resumidos", {
    useNewUrlParser: true,
    useFindAndModify: true,
    useCreateIndex: true
  })
  .then(() => {
    mongoose.connection.once("open", () =>
      console.log("Successful Connection to MongoDB!")
    );
  })
  .catch(err => {
    mongoose.connection.on("error" + err);
  });


mongoose.Promise = global.Promise;

module.exports = { mongoose } 
