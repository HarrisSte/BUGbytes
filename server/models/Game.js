const { Schema, model } = require('mongoose');

var gameSchema = new Schema({
title: String,
genre:{
type: Schema.ObjectId,
ref: 'genre'
},
morefields : String
})


const game = model('game', gameSchema);

module.exports = game;