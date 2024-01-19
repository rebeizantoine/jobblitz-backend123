const mongoose = require("mongoose");
const categorySchema = new mongoose.Schema({
  categoryname: {
    type: String,
    required: true,
  },
  categoryimage: {
    type: String,
    required: true,
  },
});
const Categories = mongoose.model("Categories", categorySchema);
module.exports = Categories;
