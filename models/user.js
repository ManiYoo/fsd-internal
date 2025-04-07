import mongoose from "mongoose";
const UserSchema = new mongoose.Schema({
  name: String,
  doj: String,
  salary: Number,
  department: String,
});
const userModel = mongoose.model("User", UserSchema);
export default userModel;
