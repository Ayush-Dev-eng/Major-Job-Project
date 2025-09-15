const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  options: {
    type: [String],
    required: true,
    validate: {
      validator: function(arr) {
        return arr.length === 4;  // Exactly 4 options
      },
      message: 'There must be exactly 4 options',
    },
  },
  correctAnswer: {
    type: {
      index: {
        type: Number,
        required: true,
        validate: {
          validator: function(value) {
            return value >= 0 && value < this.options.length;
          },
          message: 'correctAnswer index must match an option',
        },
      },
      description: {
        type: String,    // Optional explanation
      },
      image: {
        type: String,    // Optional image URL
      },
    },
    required: true,
    select: false, // Hide from normal users
  },
  creator: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',     // Reference to User model
    required: true
  },
  difficulty: {
    type: String,
    enum: ['easy', 'medium', 'hard'],
    default: 'medium',
  },
  tags: [
    {
      type: String,
    }
  ],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Question', questionSchema);
