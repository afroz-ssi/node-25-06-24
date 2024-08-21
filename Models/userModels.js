import mongoose from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
const userSchema = mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, "Username must be required"],
      unique: true,
    },
    email: {
      type: String,
      required: [true, "Email must be required"],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "Password must be required"],
      min: 6,
      max: 12,
    },
    profile: {
      type: String,
    },
    verified: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  try {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
  } catch (err) {
    next(err);
  }
});

userSchema.methods.isPasswordCorrect = async function (password) {
  return await bcrypt.compare(password, this.password);
};

userSchema.methods.generateAccessToken = () => {
  return jwt.sign({ _id: this._id }, process.env.SECRET_ACCESS_TOKEN, {
    expireIn: process.env.EXPIRY_ACCESS_TOKEN,
  });
};

userSchema.methods.generateRefreshAccessToken = () => {
  return jwt.sign({ _id: this._id }, process.env.REFRESH_SECRET_ACCESS_TOKEN, {
    expireIn: process.env.EXPIRY_REFRESH_ACCESS_TOKEN,
  });
};
// module.exports = mongoose.model("User", userSchema); // common js syntax
export default mongoose.model("User", userSchema);
