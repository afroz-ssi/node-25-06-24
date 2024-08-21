import User from "../Models/userModels.js";
import {
  generateVerificationCode,
  sendVerificationEmail,
} from "../Utils/sendMail.js";

export const signup = (req, res) => {
  res.render("signup", { title: "Sing Up", errors: {} });
};

export const register = async (req, res, next) => {
  const { username, email, password, cpassword } = req.body;
  try {
    const userExist = await User.findOne({ email });
    let errors = {};
    if (userExist) {
      errors.exist = "User already exist, please login!";
    }
    //  validation
    if (!username || username.length < 3) {
      errors.username = "Username must be at least 3 characters long.";
    }
    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      errors.email = "Please enter a valid email address.";
    }
    if (!password || password.length < 6) {
      errors.password = "Password must be at least 6 characters long.";
    }
    if (password !== cpassword) {
      errors.cpassword = "Password and confirm password must be same.";
    }
    if (!cpassword) {
      errors.cpassword = "Confirm password must be required.";
    }
    if (Object.keys(errors).length > 0) {
      return res.render("signup", {
        title: "Sign Up",
        errors,
        username,
        email,
        password,
        cpassword,
      });
    }
    const user = await User.create({ username, email, password });
    const otp = generateVerificationCode();
    await sendVerificationEmail(username, email, otp);
    console.log(user, otp);
    req.flash("success_msg", "Your account has been created successfully!");
    return res.redirect("/verification-code");
  } catch (error) {
    console.log("Error occurred during registration:", error);
    req.flash("error_msg ", "Something went wrong, please try again!");
    // next(error);
    return res.redirect("/");
  }
};

export const verification = (req, res) => {
  res.render("verification_code", { title: "OTP Verification" });
};

export const signin = (req, res) => {
  res.render("login", { title: "SignIn" });
};

export const login_success = (req, res) => {
  res.render("login_success", { title: "Login Success" });
};

// module.exports = { signup, signin }; common js syntax
