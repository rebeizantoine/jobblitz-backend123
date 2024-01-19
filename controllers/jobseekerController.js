const bcrypt = require("bcrypt");
const Jobseekers = require("../models/jobseeker");

// Get all jobseekers
const getAllJobseekers = async (req, res) => {
  try {
    const jobseekers = await Jobseekers.find();
    res.status(200).json({
      success: true,
      message: "",
      data: jobseekers,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
      data: null,
    });
  }
};

// Get jobseeker by ID
const getJobseekerById = async (req, res) => {
  try {
    const jobseeker = await Jobseekers.findById(req.params.id);
    if (jobseeker) {
      res.status(200).json({
        success: true,
        message: "",
        data: jobseeker,
      });
    } else {
      res.status(404).json({
        success: false,
        message: "Jobseeker not found",
        data: null,
      });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
      data: null,
    });
  }
};

// Create a new jobseeker
const createJobseeker = async (req, res) => {
  try {
    const { passwordnamejobseek, ...rest } = req.body;

    if (!passwordnamejobseek) {
      return res.status(400).json({
        success: false,
        message: "Password is required",
      });
    }

    const hashedPassword = await bcrypt.hash(passwordnamejobseek, 10);

    const jobseeker = await Jobseekers.create({
      ...rest,
      passwordnamejobseek: hashedPassword,
    });

    res.status(200).json({
      success: true,
      message: "Jobseeker created successfully",
      data: jobseeker,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Jobseeker not created successfully",
      error: error.message,
      data: null,
    });
  }
};

// Delete a jobseeker
const deleteJobseeker = async (req, res) => {
  try {
    await Jobseekers.findByIdAndDelete(req.params.id);
    res.status(200).json({
      success: true,
      message: "Jobseeker deleted successfully",
      data: null,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
      data: null,
    });
  }
};

// Export the controller functions
module.exports = {
  getAllJobseekers,
  getJobseekerById,
  createJobseeker,
  deleteJobseeker,
};
