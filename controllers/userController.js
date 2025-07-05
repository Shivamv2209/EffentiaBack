import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import user_model from "../models/user.js"
import dotenv from "dotenv";

dotenv.config();

export const register = async (req, res) => {
  try {
    const { email, fullname, password } = req.body;
    const user = await user_model.findOne({ email });
    if (user) {
      return res.status(400).json({ message: "user already exists" });
    }

    bcrypt.genSalt(Number(process.env.SALT), (err, salt) => {
      if (err)
        return res.status(500).json({ message: "Internal server error" });
      bcrypt.hash(password, salt, async (err, hash) => {
        if (err)
          return res.status(500).json({ message: "Internal server error" });
        const newUser = await user_model.create({
          fullname,
          email,
          password: hash,
        });
        const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET, {
          expiresIn: "7d",
        });
        res.cookie("token", token);
        return res
          .status(201)
          .json({
            message: "User successfully registered",
            user: newUser,
            token: token,
          });
      });
    });
  } catch (err) {
    return res.status(500).json({ message: "Internal Server error", err });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await user_model.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "User does not exist" });
    }

    bcrypt.compare(password, user.password, (err, isMatch) => {
      if (err)
        return res.status(500).json({ message: "Internal server error" });
      if (!isMatch)
        return res.status(404).json({ message: "Invalid credentials" });
      const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
        expiresIn: "7d",
      });
      res.cookie("token", token);
      return res
        .status(200)
        .json({ message: "user logged in", user: user, token: token });
    });
  } catch (err) {
    return res.status(500).json({ message: "Internal Server error" });
  }
};
