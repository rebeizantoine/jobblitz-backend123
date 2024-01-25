require("dotenv").config();
const express = require("express");
const multer = require("multer");
const upload = multer({ dest: "uploads/" });
const cors = require("cors");
const dbConnection = require("./config/db");
const adminRoutes = require("./routes/adminRoutes");
const employerRoutes = require("./routes/employerRoutes");
const categoryRoutes = require("./routes/categoryRoutes");
const cvRoutes = require("./routes/cvRoutes");
const jobDescriptionRoutes = require("./routes/jobdescriptionRoutes");
const jobseekerRoutes = require("./routes/jobseekerRoutes");
const featuredemployerRoutes = require("./routes/featuredemployerRoutes");
const termsofconditionRoutes = require("./routes/termsofconditionRoutes");

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Use your routes here
app.use("/admin", adminRoutes);
app.use("/employer", employerRoutes);
app.use("/categories", categoryRoutes);
app.use("/jobdescriptions", jobDescriptionRoutes);
app.use("/jobseeker/uploadCV", cvRoutes);
app.use("/jobseeker", jobseekerRoutes);
app.use("/cv", cvRoutes);
app.use("/featuredemployer", featuredemployerRoutes);
app.use("/terms", termsofconditionRoutes);

app.listen(port, () => {
  dbConnection();
  console.log(`Example app listening on port ${port}`);
});
