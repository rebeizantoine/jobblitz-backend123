const mongoose = reqiore("mongoose");

const jobdescriptionSchema = new mongoose.Schema({
  employer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Employers",
    required: true,
  },
  jobtitle: {
    type: String,
    required: true,
  },
  companyname: {
    type: String,
    required: true,

    location: {
      type: String,
      required: true,
    },
    joboverview: {
      type: String,
      required: true,
    },
    responsibilities: {
      type: String,
      required: true,
    },
    qualifications: {
      type: String,
      required: true,
    },
    employementtype: {
      type: String,
      required: true,
    },
    monthlysalary1: {
      type: Number,
      required: true,
    },
    monthlysalary2: {
      type: Number,
      required: true,
    },
    numberofvacancies: {
      type: Number,
      required: true,
    },
    degreerequired: {
      type: String,
      required: true,
    },
  },
});
const Jobdescriptions = mongoose.model("Jobdescriptions", jobdescriptionSchema);
module.exports = Jobdescriptions;
