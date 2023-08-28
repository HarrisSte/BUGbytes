const typeDefs = `#graphql
  type User {
    _id: ID!
    firstName: String
    lastName: String
    email: String
    password: String
  }

  type Bug {
    _id: ID
    bugText: String
    bugAuthor: String
    createdAt: String
    comments: String
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

  type Mutation {
    register(firstName: String!, lastName: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;