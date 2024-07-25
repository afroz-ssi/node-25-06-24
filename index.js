import express from "express";
import dotenv from "dotenv";
import path, { dirname } from "path";
dotenv.config();
const PORT = process.env.PORT || 3000;
// set static files
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.set("views", path.join(__dirname, "views"));

// routes
app.get("/", (req, res) => {
  res.send("Hello World! Node js Application");
});

app.get("/signup", (req, res) => {
  res.render("signup");
});

app.listen(
  PORT,
  console.log(`app is listning on port at http://localhost:${PORT}`)
);
