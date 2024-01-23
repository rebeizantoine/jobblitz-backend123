const Jobseekers = require("../models/jobseekers");

// Controller to handle job seeker registration
const addJobseeker = async (req, res) => {
  try {
    const newJobseeker = new Jobseekers(req.body);
    const savedJobseeker = await newJobseeker.save();

    if (!savedJobseeker) {
      return res.status(500).json({ error: "Failed to register job seeker" });
    }

    res
      .status(201)
      .json({
        message: "Job seeker registered successfully",
        jobseeker: savedJobseeker,
      });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
// Controller to get all job seekers
const getAllJobseekers = async (req, res) => {
  try {
    const jobseekers = await Jobseekers.find();
    res.status(200).json(jobseekers);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Controller to get a specific job seeker by ID
const getJobseekerById = async (req, res) => {
  try {
    const jobseeker = await Jobseekers.findById(req.params.id);
    if (!jobseeker) {
      return res.status(404).json({ error: "Jobseeker not found" });
    }
    res.status(200).json(jobseeker);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Controller to update a job seeker by ID
const updateJobseeker = async (req, res) => {
  try {
    const updatedJobseeker = await Jobseekers.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedJobseeker) {
      return res.status(404).json({ error: "Jobseeker not found" });
    }
    res.status(200).json(updatedJobseeker);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Controller to handle job seeker login (just a basic example, you may need to implement authentication)
const loginJobseeker = async (req, res) => {
  try {
    const { usernamejobseek, passwordnamejobseek } = req.body;
    const jobseeker = await Jobseekers.findOne({
      usernamejobseek,
      passwordnamejobseek,
    });

    if (!jobseeker) {
      return res.status(401).json({ error: "Invalid credentials" });
    }

    // You may want to generate and send a token for authentication here

    res.status(200).json({ message: "Login successful" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Controller to delete a job seeker by ID
const deleteJobseekerById = async (req, res) => {
  try {
    const deletedJobseeker = await Jobseekers.findByIdAndDelete(req.params.id);
    if (!deletedJobseeker) {
      return res.status(404).json({ error: "Jobseeker not found" });
    }
    res.status(200).json({ message: "Jobseeker deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Export controllers
module.exports = {
  addJobseeker,
  getAllJobseekers,
  getJobseekerById,
  updateJobseeker,
  loginJobseeker,
  deleteJobseekerById,
};
