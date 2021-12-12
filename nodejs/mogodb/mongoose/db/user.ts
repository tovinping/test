import mongoose from "mongoose";

const schema = new mongoose.Schema({
  account: String,
  password: String,
  name: String,
  mail: String,
});
const User = mongoose.model("user", schema);
export default User;
