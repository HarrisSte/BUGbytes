const { User, Game } = require('../models');
const { signToken, AuthenticationError } = require('../utils');

const resolvers = {
  Query: {
    currentUser: async (parent, { email }) => User.findOne({ email }),
  },

  Mutation: {
    register: async (parent, { firstName, lastName, email, password }) => {
      const user = await User.create({ firstName, lastName, email, password });
      const token = signToken(user);
      return { token, currentUser: user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw AuthenticationError;
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw AuthenticationError;
      }

      const token = signToken(user);

      return { token, currentUser: user };
    },
    saveGame: async (parent, { gameInput }, context) => {
      if (context.user) {
        const game = await Game.findByIdAndUpdate(
          context.user_id,
          { $push: { savedGames: gameInput } },
          { new: true }
        );
        return game;
      }
      throw new AuthenticationError("You need to be logged in!");
    },

    removeGame: async (parent, { gameId }, context) => {
      if (context.user) {
        const game = await Game.findByIdAndUpdate(
          context.user_id,
          { $pull: { savedGames: gameId } },
          { new: true }
        );
        return game;
      }
      throw new AuthenticationError("You need to be logged in!");
    },

    reportBug: async (parent, { bugText }, context) => {
      if (context.user) {
        const bug = await Bug.findByIdAndUpdate(
          context.user _id,
          { $push: { reportBug: bugText } },
          { new: true }
        );
        return bug;
      }
      throw new AuthenticationError("You need to be logged in!");
    },

    removeBug: async (parent, { bugText }, context) => {
      if (context.user) {
        const bug = await Bug.findByIdAndUpdate(
          context.user_id,
          { $pull: { reportBug: bugText } },
          { new: true }
        );
        return bug;
      }
      throw new AuthenticationError("You need to be logged in!");
    },

    addComment: async (parent, { commentText }, context) => {
      if (context.user) {
        const comment = await Comment.findByIdAndUpdate(
          context.user_id,
          { $push: { addComment: commentText } },
          { new: true }
        );
        return comment;
      }
      throw new AuthenticationError("You need to be logged in!");
    },
  },
};

module.exports = resolvers;
