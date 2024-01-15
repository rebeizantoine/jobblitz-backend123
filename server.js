require("dotenv").config();
const express = require("express");
const cors = require("cors");
const dbConnection = require("./config/db");

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded());

app.listen(port, () => {
  dbConnection();
  console.log(`Example app listening on port ${port}`);
});
