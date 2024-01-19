const mongoose = require("mongoose");

const employerSchema = new mongoose.Schema({
  firstnameEmployer: {
    type: String,
    required: true,
  },
  lastnameEmployer: {
    type: String,
    required: true,
  },
  usernameEmployer: {
    type: String,
    required: true,
  },
  passwordnameEmployer: {
    type: String,
    required: true,
  },
  locationEmployer: {
    type: String,
    required: true,
  },
  nationalityEmployer: {
    type: String,
    required: true,
  },
  phoneEmployer: {
    type: Number,
    required: true,
  },
  addressEmployer: {
    type: String,
    required: true,
  },
  imageEmployer: {
    type: String,
  },
  genderEmployer: {
    type: String,
    required: true,
  },
  emailEmployer: {
    type: String,
    required: true,
    unique: true,
    validate: {
      validator: function (v) {
        return /^[^s@]+@[^\s@]+\.[^\s@]+$/.test(v);
      },
      message: "Invalid email format",
    },
  },
  roleEmployer: {
    type: String,
    required: true,
  },
  postitionEmployer:{
    type:String,
    required:true
  },
  companyName:{
    type:String,
  }
  
});
const Employers = mongoose.model("Employers", employerSchema);
module.exports = Employers;
