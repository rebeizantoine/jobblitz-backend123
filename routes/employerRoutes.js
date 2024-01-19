const express = require("express");
const router = express.Router();
const employerController = require("../controllers/employerController");

// Get all employers
router.get("/employers", employerController.getAllEmployers);

// Get employer by ID
router.get("/employers/:id", employerController.getEmployerById);

// Create a new employer
router.post("/employers", employerController.createEmployer);

// Delete an employer
router.delete("/employers/:id", employerController.deleteEmployer);

module.exports = router;
