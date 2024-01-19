const bcrypt = require("bcrypt");
const Admins = require("../models/admin");

// Get all admins
const getAllAdmins = async (req, res) => {
  try {
    const admins = await Admins.find();
    res.json(admins);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get admin by ID
const getAdminById = async (req, res) => {
  try {
    const admin = await Admins.findById(req.params.id);
    if (admin) {
      res.json(admin);
    } else {
      res.status(404).json({ message: "Admin not found" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create a new admin
const createAdmin = async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.adminpassword, 10);
    const admin = new Admins({
      adminname: req.body.adminname,
      adminpassword: hashedPassword,
      adminrole: req.body.adminrole,
    });

    const newAdmin = await admin.save();
    res.status(201).json(newAdmin);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete an admin
const deleteAdmin = async (req, res) => {
  try {
    await Admins.findByIdAndDelete(req.params.id);
    res.json({ message: "Admin deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Export the controller functions
module.exports = {
  getAllAdmins,
  getAdminById,
  createAdmin,
  deleteAdmin,
};
