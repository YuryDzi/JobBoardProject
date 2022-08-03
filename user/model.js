const { Schema, model } = require('mongoose');

const UserSchema = new Schema({
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
  jobPreferences: new Schema({
    title: String,
  relocation: String,
  type: String,
  schedule: String,
  pay: String,
  remote: String,
  }),
  jobHistory: new Schema({
   employerName: String,
  position: String,
  location: String,
  start: String,
  end: String,
  description: String,
  }),
});

const SalarySchema = new Schema({
  companyId: Schema.Types.ObjectId,
  userId: Schema.Types.ObjectId,
  currentlyWorking: Boolean,
  endDate: Date,
  salary: Number,
  title: String,
  city: String,
  state: String,
  country: String,
  zip: String,
  experience: String,
  benefits: [String],
  industry: { name: { type: String } },
});

const User = model('users', UserSchema);
const Salary = model('salaries', SalarySchema);

module.exports = {
  User,
  Salary,
};
