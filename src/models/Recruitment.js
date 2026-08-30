import mongoose from 'mongoose';

const RecruitmentSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Please provide your name.'],
      trim: true,
    },
    branch: {
      type: String,
      required: [true, 'Please provide your branch.'],
    },
    section: {
      type: String,
      required: [true, 'Please provide your section.'],
    },
    collegeEmail: {
      type: String,
      required: [true, 'Please provide your college email id.'],
      unique: true,
      match: [/^\S+@\S+\.\S+$/, 'Please provide a valid email address.'],
    },
    phone: {
      type: String,
      required: [true, 'Please provide your phone number.'],
      match: [/^[0-9]{10}$/, 'Please provide a valid 10-digit phone number.'],
    },
    dsaLanguage: {
      type: String,
      required: [true, 'Please select your DSA language preference.'],
      enum: ['Java', 'CPP', 'C++'], // Supporting C++ as well as CPP just in case
    },
    firstDomain: {
      type: String,
      required: [true, 'Please select your first domain preference.'],
    },
    secondDomain: {
      type: String,
      required: [true, 'Please select your second domain preference.'],
    },
    year: {
      type: String,
      required: [true, 'Please select your year.'],
      enum: ['1st Year', '2nd Year'],
    },
    referredBy: {
      type: String,
      required: false,
    },
  },
  { timestamps: true }
);

export default mongoose.models.Recruitment ||
  mongoose.model('Recruitment', RecruitmentSchema);
