require("dotenv").config();
const express = require("express");
const multer = require("multer");
const upload = multer({ dest: "uploads/" });
const cors = require("cors");
const dbConnection = require("./config/db");
const adminRoutes = require("./routes/adminRoutes");
const jobseekerRoutes = require("./routes/jobseekerRoutes");
const employerRoutes = require("./routes/employerRoutes");
const categoryRoutes = require("./routes/categoryRoutes");
const cvRoutes = require("./routes/cvRoutes");

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Use your routes here
app.use("/admin", adminRoutes);
app.use("/jobseeker", jobseekerRoutes);
app.use("/employer", employerRoutes);
app.use("/category", categoryRoutes);
app.use("/cv", cvRoutes);

app.listen(port, () => {
  dbConnection();
  console.log(`Example app listening on port ${port}`);
});
