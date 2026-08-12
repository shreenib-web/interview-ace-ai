import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/User.js";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function getSafeUser(user) {
  return {
    id: user._id,
    fullName: user.fullName,
    email: user.email,
    createdAt: user.createdAt,
  };
}

function createToken(userId) {
  if (!process.env.JWT_SECRET || process.env.JWT_SECRET === "your_secret_key") {
    throw new Error("JWT_SECRET is not configured in server/.env");
  }

  return jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: "7d",
  });
}

export async function register(req, res) {
  try {
    const fullName = String(req.body.fullName || "").trim();
    const email = String(req.body.email || "").trim().toLowerCase();
    const password = String(req.body.password || "");

    if (!fullName || !email || !password) {
      return res.status(400).json({ message: "All fields are required." });
    }

    if (!emailRegex.test(email)) {
      return res.status(400).json({ message: "Please enter a valid email address." });
    }

    if (password.length < 8) {
      return res.status(400).json({ message: "Password must be at least 8 characters." });
    }

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(409).json({ message: "An account with this email already exists." });
    }

    const hashedPassword = await bcrypt.hash(password, 12);

    const user = await User.create({
      fullName,
      email,
      password: hashedPassword,
    });

    return res.status(201).json({
      message: "Account created successfully",
      user: getSafeUser(user),
    });
  } catch (error) {
    console.error("Registration failed:", error.message);

    return res.status(500).json({
      message: "Unable to create account right now. Please try again.",
    });
  }
}

export async function login(req, res) {
  try {
    const email = String(req.body.email || "").trim().toLowerCase();
    const password = String(req.body.password || "");

    if (!email || !password) {
      return res.status(400).json({ message: "Email and password are required." });
    }

    if (!emailRegex.test(email)) {
      return res.status(400).json({ message: "Please enter a valid email address." });
    }

    const user = await User.findOne({ email }).select("+password");

    if (!user) {
      return res.status(401).json({ message: "Invalid email or password." });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res.status(401).json({ message: "Invalid email or password." });
    }

    const token = createToken(user._id);

    return res.json({
      message: "Login successful",
      token,
      user: getSafeUser(user),
    });
  } catch (error) {
    console.error("Login failed:", error.message);

    return res.status(500).json({
      message: "Unable to log in right now. Please try again.",
    });
  }
}
