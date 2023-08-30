const { User, Game, Bug } = require("../models");
const { signToken, AuthenticationError } = require("../utils");

const resolvers = {
  Query: {
    currentUser: async (parent, { email }) => User.findOne({ email }),
    bug: async (parent, { bugId }) =>
      Bug.findOne({ _id: bugId }).populate("comments.author"),
    game: async (parent, { gameId }) =>
      Game.findOne({ rawgId: gameId }).populate({
        path: "bugs",
        populate: {
          path: "comments.author",
          model: "User",
        },
      }),
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
    updateProfilePicture: async (parent, { file }, context) => {
      if (context.user) {
        await User.findByIdAndUpdate(
          context.user._id,
          { $set: { profileImageUrl: file } },
          { new: true }
        );

        return true;
      }
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

    reportBug: async (parent, { bugText, gameId }, context) => {
      if (context.user) {
        const bug = await Bug.create({
          text: bugText,
          author: context.user._id,
        });
        await Game.findOneAndUpdate(
          { rawgId: gameId },
          { $push: { bugs: bug._id } },
          { new: true, upsert: true }
        );
        await User.findByIdAndUpdate(
          { _id: context.user._id },
          { $push: { bugs: bug._id } },
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

    addComment: async (parent, { comment }, context) => {
      if (context.user) {
        const newComment = {
          commentBody: comment.commentBody,
          author: context.user._id,
        };
        const bug = await Bug.findByIdAndUpdate(
          comment.bugId,
          { $push: { comments: newComment } },
          { new: true }
        ).populate("comments.author");
        return bug;
      }
      throw new AuthenticationError("You need to be logged in!");
    },

    removeComment: async (parent, { commentText }, context) => {
      if (context.user) {
        const comment = await Comment.findByIdAndUpdate(
          context.user_id,
          { $pull: { addComment: commentText } },
          { new: true }
        );
        return comment;
      }
      throw new AuthenticationError("You need to be logged in!");
    },
  },
};

module.exports = resolvers;
