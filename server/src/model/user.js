const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const shops = new mongoose.Schema({
 name:{
    type: String,
    required: true,
  },
  detail: {
    type: String,
    required: true,
  },
  type:{
    type: String,
    required: true,
  },
  place: { type: String, required: true },
});
const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  isVerified: { type: Boolean },
  verificationToken: { type: String },
  shops: [shops],
});

userSchema.pre("save", async function (next) {
  if (this.isModified("password") || this.isNew) {
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(this.password, salt);
    this.password = hash;
  }
  next();
});

userSchema.methods.comparePassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

const User = mongoose.model("User", userSchema);
module.exports = User;
