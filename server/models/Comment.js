const { Schema, Types } = require("mongoose");

const commentSchema = new Schema(
  {
    commentId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
    },
    commentBody: {
      type: String,
      required: true,
      maxlength: 280,
    },
    author: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    createdAt: {
      type: Date,
      get: (date) => date.toLocaleDateString(),
      default: Date.now,
    },
  },
  {
    toJSON: {
      getters: true,
    },
    id: false,
  }
);

module.exports = commentSchema;

module.exports = commentSchema;
