const typeDefs = `#graphql
  type User {
    _id: ID!
    firstName: String
    lastName: String
    email: String
    password: String
    savedGames: [Game]
    bugs: [Bug]
    comments: [Comment]
  }

  type Bug {
    _id: ID
    bugText: String
    bugAuthor: String
    createdAt: String
    comments: [Comment]
  }

  type Comment {
  commentId: ID
  commentBody: String
  username: String
  createdAt: String

  }

  type Game {
    _id: ID
    title: String
  }

  type Auth {
    token: ID!
    currentUser: User
  }

  type Query {
      currentUser(email: String!): User
  }

  input GameInput {
    title: String
  }
  
  type Mutation {
    register(firstName: String!, lastName: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    saveGame(gameInput: GameInput): User
    removeGame(gameId: ID!): User
    reportBug(bugText: String!): User
    removeBug(bugText: String!): User
    addComment(commentText: String!): User
    removeComment(commentText: String!): User
  }
`;

module.exports = typeDefs;
