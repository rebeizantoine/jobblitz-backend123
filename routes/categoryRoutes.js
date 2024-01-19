const express = require("express");
const router = express.Router();
const multer = require("multer");
const upload = multer({ dest: "uploads/" });
const categoryController = require("../controllers/categoryController");

// Get all categories
router.get("/categories", categoryController.getAllCategories);

// Get category by ID
router.get("/categories/:id", categoryController.getCategoryById);

// Create a new category
router.post(
  "/categories",
  upload.single("categoryimage"),
  categoryController.createCategory
);

// Delete a category
router.delete("/categories/:id", categoryController.deleteCategory);

module.exports = router;
