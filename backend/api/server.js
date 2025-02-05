import express from "express";
import axios from "axios";
import cors from "cors";

const app = express();

// Middleware to enable CORS for all routes
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*"); // Allow all origins
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS"); // Allow HTTP methods
  next();
});

app.use(express.json());
app.use(cors());

// Proxy endpoint
app.post("/compare", async (req, res) => {
  try {
    const { data } = await axios.post(
      "http://127.0.0.1:8000/compare",
      req.body
    );
    res.json(data);
  } catch (error) {
    console.error("Error fetching data from API:", error.message);
    res.status(500).json({ error: "Failed to fetch data" });
  }
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);
