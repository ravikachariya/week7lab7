const express = require("express");
const app = express();

const connectDB = require("./db");
const {
  getSendRecips,
  renderSendRecips,
  addSendRecip,
  deleteAllSendRecips,
} = require("./controller");

//Important: will be discussed next week
app.use(express.json());

// Set views directory for EJS templates
app.set("views", "views");
// Set EJS as the view engine
app.set("view engine", "ejs");
// Serve static files from the "public" directory
app.use(express.static("public"));

// Connect to MongoDB
connectDB();

// Routes

// Route to render index.html with sendrecips using EJS
app.get("/", renderSendRecips);

// GET all SendRecips
app.get("/api/sendrecips", getSendRecips);
// Add a new Goal
app.post("/api/sendrecips", addSendRecip);
// DELETE all Goal
app.delete("/api/sendrecips", deleteAllSendRecips);

const PORT = 4000;

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});
