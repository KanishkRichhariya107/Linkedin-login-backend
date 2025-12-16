const express = require("express");
const cors = require("cors");
require("dotenv").config();

const linkedinRoutes = require("./linkedin");

const app = express();

app.use(cors({
  origin: process.env.FRONTEND_URL,
  credentials: true
}));

app.use(express.json());

// IMPORTANT
app.use("/auth", linkedinRoutes);

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
