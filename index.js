import express from "express";
import dotenv from "dotenv";
import path, { dirname } from "path";
import connectDB from "./Database/db.js";
import userRoutes from "./Routes/userRoutes.js";
import morgan from "morgan";
import bodyParser from "body-parser";
import flash from "connect-flash";
import session from "express-session";
import flashMessage from "./Middleware/flush_message.js";

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
// Set up express-session
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
  })
);
app.use(flash());
app.use(flashMessage);

// db connection
connectDB();
app.use(bodyParser.urlencoded({ extended: true }));
// app.use(express.json());
// app.use(cors());
app.use(morgan("dev"));

// routes
app.use("/", userRoutes);


app.listen(
  PORT,
  console.log(`app is listning on port at http://localhost:${PORT}`)
);
