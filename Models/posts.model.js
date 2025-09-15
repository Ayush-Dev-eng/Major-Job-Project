const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  },
  body: {
    type: String,
    required: true,
    trim: true
  },
  likes: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"
    }
  ],
  time: {
    type: Date,
    default: Date.now
  },
  media: {
    type: String,
    default: "" 
  },
  active: {
    type: Boolean,
    default: true
  },
  filetype: {
    type: String,
    enum: ["image", "video", "audio", "pdf", "other"],
    default: "other"
  }
});

const Post = mongoose.model("Post", postSchema);

module.exports = Post;
