const Categories = require("../models/category");
const { imageUploader } = require("../extra/imageUploader");

// Get all categories
const getAllCategories = async (req, res) => {
  try {
    const categories = await Categories.find();
    res.status(200).json({
      success: true,
      message: "",
      data: categories,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
      data: null,
    });
  }
};

// Get category by ID
const getCategoryById = async (req, res) => {
  try {
    const category = await Categories.findById(req.params.id);
    if (category) {
      res.status(200).json({
        success: true,
        message: "",
        data: category,
      });
    } else {
      res.status(404).json({
        success: false,
        message: "Category not found",
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

// Create a new category
const createCategory = async (req, res) => {
  try {
    // Check if req.file is defined
    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: "Category image is required",
      });
    }

    const categoryImage = await imageUploader(req);
    if (!categoryImage) {
      return res.status(400).json({
        success: false,
        message: "Error uploading category image",
      });
    }

    const category = new Categories({
      categoryname: req.body.categoryname,
      categoryimage: categoryImage, // Use the uploaded image path
    });

    const newCategory = await category.save();
    res.status(201).json({
      success: true,
      message: "Category created successfully",
      data: newCategory,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
      data: null,
    });
  }
};

// Delete a category
const deleteCategory = async (req, res) => {
  try {
    await Categories.findByIdAndDelete(req.params.id);
    res.status(200).json({
      success: true,
      message: "Category deleted successfully",
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
  getAllCategories,
  getCategoryById,
  createCategory,
  deleteCategory,
};
