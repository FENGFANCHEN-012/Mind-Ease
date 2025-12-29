import express from "express";
import { signup, login } from "../controllers/authController.js";

const app = express();
app.use(express.json());


app.get("/", (req, res) => {
  res.send("API running");
});





app.listen(3000, () => {
  console.log("Server running on port 3000");
});
