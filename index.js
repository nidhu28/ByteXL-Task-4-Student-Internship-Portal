
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect(process.env.MONGO_DB_URI)
  .then(() => console.log("Database connected successfully"))
  .catch((error) => console.log("Database connection error:", error));

// Application Schema
const applicationSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    match: /^\S+@\S+\.\S+$/
  },
  rollNumber: {
    type: String,
    required: true,
    trim: true
  },
  internship: {
    type: String,
    required: true
  }
});

const Application = mongoose.model("Application", applicationSchema);

// POST API - Submit application
app.post("/api/applications", async (req, res) => {
  try {
    const { name, email, rollNumber, internship } = req.body;

    if (!name || !email || !rollNumber || !internship) {
      return res.status(400).json({
        message: "All fields are required"
      });
    }

    const application = new Application({
      name,
      email,
      rollNumber,
      internship
    });

    await application.save();

    res.status(201).json({
      message: "Application submitted successfully!",
      application
    });
  } catch (error) {
    res.status(500).json({
      message: "Error submitting application",
      error: error.message
    });
  }
});

// GET API - Retrieve applications
app.get("/api/applications", async (req, res) => {
  try {
    const applications = await Application.find();
    res.status(200).json(applications);
  } catch (error) {
    res.status(500).json({
      message: "Error retrieving applications"
    });
  }
});

// Server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
