const bcrypt = require("bcrypt");
const Employers = require("../models/employer");
const { imageUploader } = require("../extra/imageUploader");

// Get all employers
const getAllEmployers = async (req, res) => {
  try {
    const employers = await Employers.find();
    res.status(200).json({
      success: true,
      message: "",
      data: employers,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
      data: null,
    });
  }
};

// Get employer by ID
const getEmployerById = async (req, res) => {
  try {
    const employer = await Employers.findById(req.params.id);
    if (employer) {
      res.status(200).json({
        success: true,
        message: "",
        data: employer,
      });
    } else {
      res.status(404).json({
        success: false,
        message: "Employer not found",
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

// Create a new employer
const createEmployer = async (req, res) => {
  try {
    // Check if req.file is defined
    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: "Image file is required",
      });
    }

    const imageemployer = await imageUploader(req);
    if (!imageemployer) {
      return res.status(400).json({
        success: false,
        message: "Error uploading image",
      });
    }

    const hashedPassword = await bcrypt.hash(req.body.passwordnameemployer, 10);

    const employer = await Employers.create({
      ...req.body,
      imageemployer: imageemployer, // Use the uploaded image path
      passwordnameEmployer: hashedPassword,
    });

    res.status(201).json({
      success: true,
      message: "Employer created successfully",
      data: employer,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Employer not created successfully",
      error: error.message,
      data: null,
    });
  }
};

// Delete an employer
const deleteEmployer = async (req, res) => {
  try {
    await Employers.findByIdAndDelete(req.params.id);
    res.status(200).json({
      success: true,
      message: "Employer deleted successfully",
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
  getAllEmployers,
  getEmployerById,
  createEmployer,
  deleteEmployer,
};
