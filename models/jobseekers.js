const mongoose = require("mongoose");

const jobseekerSchema = new mongoose.Schema({
  firstnamejobseek: {
    type: String,
    required: true,
  },
  lastnamejobseek: {
    type: String,
    required: true,
  },
  usernamejobseek: {
    type: String,
    required: true,
  },
  passwordnamejobseek: {
    type: String,
    required: true,
  },
  locationjobseek: {
    type: String,
    required: true,
  },
  nationalityjobseek: {
    type: String,
    required: true,
  },
  phonejobseek: {
    type: Number,
    required: true,
  },
  addressjobseek: {
    type: String,
    required: true,
  },
  genderjobseek: {
    type: String,
    required: true,
  },
  imagejobseek: {
    type: String,
  },
  emailjobseek: {
    type: String,
  },
  cvfromwebsite: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "CV",
  },
  uploadedcv: {
    type: String,
  },
});

const Jobseekers = mongoose.model("Jobseekers", jobseekerSchema);
module.exports = Jobseekers;
