import express from "express";
import dotenv from "dotenv";
import ticketRoutes from "./ticket/routes.js";
import connectToDatabase from "./config/db.js";

dotenv.config();

const app = express();
app.use(express.json());

// Database connection
connectToDatabase();

const port = process.env.PORT || 3000;

// Routes
app.use("/api/ticket", ticketRoutes);

// Root route for health check or info
app.get("/", (req, res) => {
  res.send("Analog Powertech Engineering");
});

// Start the server
app.listen(port, (err) => {
  if (err) {
    console.error("Failed to start server:", err);
    process.exit(1); // Exit the process if the server fails to start
  } else {
    console.log(`Server is running at http://localhost:${port}`);
  }
});
