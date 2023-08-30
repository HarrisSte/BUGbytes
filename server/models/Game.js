const { Schema, model } = require("mongoose");

const gameSchema = new Schema({
  rawgId: {
    type: Number,
    required: true,
  },
  bugs: [
    {
      type: Schema.Types.ObjectId,
      ref: "bug",
    },
  ],
});

const game = model("game", gameSchema);

module.exports = game;
