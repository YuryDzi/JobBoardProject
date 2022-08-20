const mongoose = require('mongoose');

const ApplicationSchema = new mongoose.Schema({
  jobId: mongoose.Types.ObjectId,
  userId: mongoose.Types.ObjectId,
  name: String,
  about: String,
  contactNo: String,
  emails: [String],
  city: String,
  state: String,
  country: String,
  zip: String,
  skills: [String],
  website: String,
  employerNames: [String],
  positions: [String],
  locations: [String],
  start: [String],
  end: [String],
  date: Date,
  status: {
    type: String,
    enum: ['RECEIVED', 'UNDER_REVIEW', 'ACCEPTED', 'REJECTED'],
  },
});

const Application = mongoose.model('applications', ApplicationSchema);

module.exports = { Application };
