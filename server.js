import express from "express";
import { fileURLToPath } from "url";
import { dirname } from "path";
import path from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();

// Serve static files from the build folder
app.use(express.static(path.join(__dirname, "vite build")));

// Handle all other routes by serving the index.html file
app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "vite build", "dist/index.html"));
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
