const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { generateToken } = require("../extra/generateToken");
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
const adminLogin = async (req, res) => {
  try {
    // Log incoming request body for debugging
    console.log("➡️ Login attempt with body:", req.body);

    const { adminname, adminpassword } = req.body;

    // Check if both fields exist
    if (!adminname || !adminpassword) {
      return res.status(400).json({
        success: false,
        message: "Adminname and password are required.",
      });
    }

    // Find the admin by adminname
    const admin = await Admins.findOne({ adminname });
    console.log("🔍 Found admin record:", admin);

    // If admin not found
    if (!admin) {
      return res.status(404).json({
        success: false,
        message: `Admin with username "${adminname}" not found`,
      });
    }

    // Compare provided password with hashed password
    const passwordMatch = await bcrypt.compare(
      adminpassword,
      admin.adminpassword
    );

    if (!passwordMatch) {
      return res.status(401).json({
        success: false,
        message: "Wrong password.",
      });
    }

    // Generate JWT token
    const token = generateToken(admin._id, admin.adminrole);

    console.log("✅ Login successful, token generated");

    return res.status(200).json({
      success: true,
      message: `Admin with username "${adminname}" logged in successfully.`,
      data: token,
    });
  } catch (error) {
    console.error("❌ Error during admin login:", error);
    return res.status(500).json({
      success: false,
      message: "Unable to login.",
      error: error.message,
    });
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
  adminLogin,
};
