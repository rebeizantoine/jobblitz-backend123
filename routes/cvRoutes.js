const express = require("express");
const router = express.Router();
const {
  createCV,
  deleteCVById,
  updateCVById,
  getCVById,
  getAllCVs,
} = require("../controllers/cvController");

// Create a new CV
router.post("/createCV", createCV);

// Get all CVs
router.get("/getAllCVs", getAllCVs);

// Get CV by ID
router.get("/getCVById/:id", getCVById);

// Update CV by ID
router.put("/updateCVById/:id", updateCVById);

// Delete CV by ID
router.delete("/deleteCVById/:id", deleteCVById);

module.exports = router;
