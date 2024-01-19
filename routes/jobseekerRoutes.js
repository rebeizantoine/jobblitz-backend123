const express = require("express");
const router = express.Router();
const jobseekerController = require("../controllers/jobseekerController");

// Get all jobseekers
router.get("/jobseekers", jobseekerController.getAllJobseekers);

// Get jobseeker by ID
router.get("/jobseekers/:id", jobseekerController.getJobseekerById);

// Create a new jobseeker
router.post("/jobseekers", jobseekerController.createJobseeker);

// Delete a jobseeker
router.delete("/jobseekers/:id", jobseekerController.deleteJobseeker);

module.exports = router;
