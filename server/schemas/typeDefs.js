const typeDefs = `#graphql
  type User {
    _id: ID!
    firstName: String
    lastName: String
    email: String
    profileImageUrl: String
    password: String
    savedGames: [Game]
    bugs: [Bug]
  }

  type Bug {
    _id: ID
    text: String
    author: String
    createdAt: String
    comments: [Comment]
  }

  input CommentInput {
    bugId: ID
    commentBody: String
  }

  type Comment {
    commentId: ID
    commentBody: String
    author: User
    createdAt: String
  }

  type Game {
    bugs: [Bug]
  }

  type Auth {
    token: ID!
    currentUser: User
  }

  type Query {
      currentUser(email: String!): User
      bug(bugId: ID) : Bug
      game(gameId: ID) : Game
  }

  input GameInput {
    title: String
  }
  
  type Mutation {
    register(firstName: String!, lastName: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    saveGame(gameInput: GameInput): User
    removeGame(gameId: ID!): User
    reportBug(bugText: String!, gameId: ID!): Bug
    removeBug(bugText: String!): Boolean
    addComment(comment: CommentInput): Comment
    removeComment(commentId: ID!, bugId: ID!): Bug
    updateProfilePicture(file: String!): Boolean
  }
`;

module.exports = typeDefs;
