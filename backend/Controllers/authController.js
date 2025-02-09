const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

exports.register = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ name, email, password: hashedPassword });

    await user.save();
    console.log("User saved to DB:", user); // 👀 Debugging line

    res.status(201).json({ message: "User registered successfully" });
  } catch (err) {
    console.error("Error saving user:", err); // 👀 Debugging line
    res.status(500).json({ error: "Registration failed" });
  }
};

exports.login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(401).json({ error: "Invalid credentials" });
    }
    const token = jwt.sign({ userId: user._id }, "your-secret-key", {
      expiresIn: "1h",
    });
    res.status(200).json({ token, message: "Login successful" });
  } catch (err) {
    res.status(500).json({ error: "Login failed" });
  }
};
