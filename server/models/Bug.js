const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const bugSchema = new Schema({
  bugText: {
    type: String,
    required: 'You need to leave a bug!',
    minlength: 1,
    maxlength: 280,
    trim: true,
  },
  bugAuthor: {
    type: String,
    required: true,
    trim: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: (timestamp) => dateFormat(timestamp),
  },
  comments: [
    {
      commentText: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 280,
      },
      commentAuthor: {
        type: String,
        required: true,
      },
      createdAt: {
        type: Date,
        default: Date.now,
        get: (timestamp) => dateFormat(timestamp),
      },
    },
  ],
});

const bug = model('bug', bugSchema);

module.exports = bug;