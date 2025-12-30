require("dotenv").config();
const express = require("express");
const cors = require("cors");
const userController = require("./Controllers/authController");
const authenticate = require("./MiddleWares/authenticate");

const app = express();
app.use(express.json());
app.use(cors());



app.post("/user/signup", userController.registerUser);
app.post("/user/login", userController.login);


app.get("/", (req, res) => {
  res.send("API running");
});





app.listen(3000, () => {
  console.log("Server running on port 3000");
});
