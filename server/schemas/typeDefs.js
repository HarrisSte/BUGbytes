const typeDefs = `#graphql
  type User {
    _id: ID!
    firstName: String
    lastName: String
    email: String
    password: String
    savedGames: String
    bugs: [Bug]!
  }

  type Bug {
    _id: ID
    text: String
    author: String
    createdAt: String
    comments: [Comment]!
  }

  type Game {
    _id: ID
    rawgId: Number
    bugs: [Bug]!
  }

  type Auth {
    token: ID!
    currentUser: User
  }

  type Query {
    currentUser(email: String!): User
  }

  type Mutation {
    register(firstName: String!, lastName: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;