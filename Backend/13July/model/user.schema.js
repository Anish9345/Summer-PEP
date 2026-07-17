const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
      trim: true,
    },
    email: {
      type: String,
      require: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    mobil: {
      type: String,
      require: true,
      unique: true,
    },
    age: {
      type: Number,
      require: true,
      min: 0,
    },
    city: {
      type: String,
      require: true,
      trim: true,
    },
    isActive: {
      type: Boolean,
      require: true,
    },
  },
  {
    collation: "users",
  },
);

module.exports = mongoose.model("User", userSchema);
