
// Import required packages
const express = require("express");
const cors = require("cors");
require("dotenv").config();

// Create Express application
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Home API
app.get("/", (req, res) => {
    res.send("Welcome to Digital Healthcare Backend!");
});

// Health check API
app.get("/api/health", (req, res) => {
    res.json({
        success: true,
        message: "Digital Healthcare Server is running!"
    });
});

// Patient API
app.get("/api/patients", (req, res) => {
    res.json({
        success: true,
        message: "Patient API is working!",
        patients: []
    });
});

// Doctor API
app.get("/api/doctors", (req, res) => {
    res.json({
        success: true,
        message: "Doctor API is working!",
        doctors: []
    });
});

// Appointment API
app.get("/api/appointments", (req, res) => {
    res.json({
        success: true,
        message: "Appointment API is working!",
        appointments: []
    });
});

// MongoDB Connection
const PORT = process.env.PORT || 5000;

async function startServer() {
    try {
        if (process.env.MONGO_URI) {
            await mongoose.connect(process.env.MONGO_URI);
            console.log("MongoDB Connected Successfully!");
        } else {
            console.log("MongoDB URI not configured. Running without database.");
        }

        app.listen(PORT, () => {
            console.log(`Server running at http://localhost:${PORT}`);
        });

    } catch (error) {
        console.error("Database connection error:", error.message);
        process.exit(1);
    }
}

startServer();
