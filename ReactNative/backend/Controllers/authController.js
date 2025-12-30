import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { findUserByEmail,createUser } from "../Models/usermodel";

export async function login(req, res) {
  try {
    const { email, password } = req.body;

    const user = await findUserByEmail(email);
    if (!user) {
      return res.status(401).json({ error: "Invalid credentials" });
    }

    const match = await bcrypt.compare(password, user.password);
    if (!match) {
      return res.status(401).json({ error: "Invalid credentials" });
    }

 
    const token = jwt.sign(
      {
        userId: user.user_id,
        role: user.role
      },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );

    res.json({
      token,
      user: {
        id: user.user_id,
        username: user.username,
        role: user.role
      }
    });

  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
}


export async function registerUser(req, res) {
  try {
    const { username, email, password } = req.body;

 
    if (!username || !email || !password) {
      return res.status(400).json({ error: "Missing fields" });
    }

   
    const existing = await findUserByEmail(email);
    if (existing) {
      return res.status(409).json({ error: "Email already registered" });
    }
    const hashedPassword = await bcrypt.hash(password, 10);

   
    const user = await createUser(username, email, hashedPassword);

  


    res.status(201).json({
      message: "User registered successfully",
      user: {
        id: user.user_id,
        username: user.username,
        email: user.email
      }
    });

  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
}



