const { Schema, model } = require("mongoose");
//rawgId will allow us to pull the data from the game.  We don't need the genre because info can be pulled from this id type number. Also, bugs are put there  to relate back to the game.
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
