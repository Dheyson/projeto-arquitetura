const Resume = require("../models/Resume");

// SAVE
async function save(req, res) {
  try {
    const resume = new Resume();
    resume.file = req.body.file;
    resume.title = req.body.title;
    resume.description = req.body.description;
    resume.discipline = req.body.discipline;
    resume.topic = req.body.topic;
    resume.userId = req.tokenId;

    resume.save();

    res.status(200).json({success: true, message: "The Resume was saved successfully"})
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
}

// GET ALL
async function resume(req, res) {
  try {
    // Finding All Resumes
    const resumes = await Resume.find().sort({ createdAt: -1 });

    // Response
    res.status(200).json(resumes);
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
}

// GET BY USER
async function resumeByUser(req, res) {
  try {
    const userId = req.tokenId;

    // Finding All Resumes by UserId
    const resumes = await find({ userId }).sort({ createdAt: -1 });

    // Response
    res.status(200).json(resumes);
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
}

module.exports = { save, resume, resumeByUser };
