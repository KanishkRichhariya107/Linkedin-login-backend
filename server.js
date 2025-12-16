require("dotenv").config();
const express = require("express");
const cors = require("cors");

const linkedinRoutes = require("./Linkedin");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/auth", linkedinRoutes);

app.listen(process.env.PORT, () => {
  console.log("Server running on port 5001");
});
