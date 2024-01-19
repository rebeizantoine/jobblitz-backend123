const mongoose = require("mongoose");

const adminSchema = new mongoose.Schema({
  adminname: {
    type: String,
    required: true,
  },
  adminpassword: {
    type: String,
    reuqired: true,
  },
  adminrole: {
    type: String,
    required: true,
  },
});
const Admins = mongoose.model("Admins", adminSchema);
module.exports = Admins;
