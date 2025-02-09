const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");

require("dotenv").config();

const app = express();
connectDB();

app.use(express.json()); // Middleware for JSON
app.use(cors()); // Enable CORS

app.use("/api/auth", require("./routes/authRoutes")); // User authentication routes

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
