import express from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();
import {login, registerUser } from "./Controllers/authController.js";
import {authenticate} from "./MiddleWares/authenticate.js"; 

const app = express();
app.use(express.json());
app.use(cors());



app.post("/user/signup", registerUser);
app.post("/user/login", login);


app.get("/", (req, res) => {
  res.send("API running");
});





app.listen(3000, () => {
  console.log("Server running on port 3000");
});
