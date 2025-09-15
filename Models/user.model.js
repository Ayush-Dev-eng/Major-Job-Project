const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true
  },
  password: {
    type: String,
    required: true
  },
  isActive: {
     type: Boolean,
     default: true
  },
  pfp: {
    type: String,
    default: "default.png"
  },
  time: {
    type: Date,
    default: Date.now
  },
  role: {
    type: String,
    enum: ["User", "recruiter"], 
    default: "recruiter"
  }
});

const User = mongoose.model("User", userSchema);

module.exports = User;
