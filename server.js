import express from "express";
import { fileURLToPath } from "url";
import { dirname, extname } from "path";
import path from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();

// Serve static files from the 'dist' directory
app.use(express.static(path.join(__dirname, "dist")));

// Handle all other routes by serving the index.html file
app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});

// Set correct MIME type for JavaScript files
app.use((req, res, next) => {
  const ext = extname(req.url);
  if (ext === ".js") {
    res.type("application/javascript");
  }
  next();
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
