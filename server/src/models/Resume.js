const db = require("../database/Database");

const ResumeSchema = new db.mongoose.Schema({
  file: {
    type: String,
    require: true
  },
  title: {
    type: String,
    require: true
  },
  description: {
    type: String,
    require: true
  },
  discipline: {
    type: String,
    require: true
  },
  topic: {
    type: String,
    require: true
  },
  userId: {
      type: String,
      required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = db.mongoose.model("Resume", ResumeSchema);
