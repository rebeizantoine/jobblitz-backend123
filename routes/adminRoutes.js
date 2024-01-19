const express = require("express");
const router = express.Router();
const adminController = require("../controllers/adminController1");

// Get all admins
router.get("/admins", adminController.getAllAdmins);

// Get admin by ID
router.get("/admins/:id", adminController.getAdminById);

// Create a new admin
router.post("/admins", adminController.createAdmin);

// Delete an admin
router.delete("/admins/:id", adminController.deleteAdmin);

module.exports = router;
