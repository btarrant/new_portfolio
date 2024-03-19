import express from "express";
import path from "path";
const app = express();

// Serve static files from the build folder
app.use(express.static(path.join(__dirname, "build")));

// Handle all other routes by serving the index.html file
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "vite build", "index.html"));
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
