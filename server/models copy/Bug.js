const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');
const commentSchema = require("./Comment");

const bugSchema = new Schema({
  text: {
    type: String,
    required: 'You need to leave a bug!',
    minlength: 1,
    maxlength: 280,
    trim: true,
  },
  author: {
    type: String,
    required: true,
    trim: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: (timestamp) => dateFormat(timestamp),
  },
  comments: [commentSchema],
});

bugSchema.virtual("bugCount").get(function () {
  return this.comments.length;
});

const bug = model('bug', bugSchema);

module.exports = bug;