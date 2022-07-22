const mongoose = require('mongoose');

const ApplicationSchema = new mongoose.Schema({
  jobId: mongoose.Types.ObjectId,
  userId: mongoose.Types.ObjectId,
  names: String,
  coverLetter: String,
  skills: mongoose.Schema.Types.Mixed,
  date: Date,
  status: {
    type: String,
    enum: ['RECEIVED', 'UNDER_REVIEW', 'ACCEPTED', 'REJECTED'],
  },
});

const Application = mongoose.model('applications', ApplicationSchema);

module.exports = { Application };
