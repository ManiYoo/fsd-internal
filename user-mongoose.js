import express from "express";
import userModel from "./models/user.js";
import mongoose from "mongoose";
const app = express();
app.use(express.json());
app.listen(3000, () => {
  console.log("Server listening on port 3000");
});

mongoose
  .connect(
    "mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.2.3"
  )
  .then(() => {
    console.log("Database connected");
  });
app.get("/", async (req, res) => {
  const users = await userModel.find({});
  res.json(users);
});
app.get("/:id", async (req, res) => {
  const { id } = req.params;
  const user = await userModel.find({ _id: id });
  res.json(user);
});
app.post("/", async (req, res) => {
  const { name, doj, salary, department } = req.body;
  const user = await userModel.create({
    name,
    doj,
    salary,
    department,
  });
  await user.save();
  res.json(user);
});
app.delete("/:id", async (req, res) => {
  const { id } = req.params;
  await userModel.findByIdAndDelete({
    _id: id,
  });
  res.json({
    message: "User deleted successfully",
  });
});
app.put("/:id", async (req, res) => {
  const { id } = req.params;
  const { name, doj, salary, department } = req.body;
  const updatedUser = await userModel.findByIdAndUpdate(
    id,
    { name, doj, salary, department },
    { new: true }
  );
  res.json(updatedUser);
});
