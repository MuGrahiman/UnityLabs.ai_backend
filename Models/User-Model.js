import mongoose from "mongoose";
const UserSchema = mongoose.Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
  type: { type: String, enum: ["buyer", "seller"], required: true },
});

const User = mongoose.model("User", UserSchema);
export default User;
 