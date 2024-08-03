import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";
import { errorHandler } from "../utils/error.js";

export const signup = async (req, res, next) => {
  const { username, email, password } = req.body;

  // Check for missing fields
  if (!username || !email || !password || username === '' || email === '' || password === '') {
    return next(errorHandler(400, 'All fields are required'));
  }

  // Hash the password
  const hashpassword = bcryptjs.hashSync(password, 10);

  // Create a new user instance
  const newUser = new User({
    username,
    email,
    password: hashpassword,
  });

  // Save the new user and handle any potential errors
  try {
    await newUser.save();
    res.status(201).json({ message: 'Successfully signed up' });
  } catch (err) {
    return next(err);
  }
};
