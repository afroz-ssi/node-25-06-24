import express from "express";
import {
  signup,
  register,
  signin,
  login_success,
  verification,
} from "../Controllers/userController.js";
import multer from "multer";
import path from "path";

// const upload = multer({ dest: "uploads/" });
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    );
  },
});

const upload = multer({ storage: storage });
const router = express.Router();

router.get("/", signup);
router.post("/register", upload.single("avatar"), register);
router.get("/verification-code", verification);
router.get("/login", signin);
router.get("/login-success", login_success);
export default router;
