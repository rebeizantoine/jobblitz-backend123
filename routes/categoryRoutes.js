const express = require("express");
const router = express.Router();
const multer = require("multer");
const upload = multer({ storage: multer.memoryStorage() });

const {
  getAllCategories,
  getCategoryByID,
  addCategory,
  deleteCategory,
  updateCategory,
} = require("../controllers/categoryController");

router.get("/", getAllCategories);
router.get("/getByID/:id", getCategoryByID);
router.post("/addCategory", upload.single("image"), addCategory);
router.put("/updateCategory/:id", updateCategory);
router.delete("/deleteCategory/:id", deleteCategory);
module.exports = router;
