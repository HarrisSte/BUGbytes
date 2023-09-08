import { gql } from "@apollo/client";

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      currentUser {
        email
        firstName
        lastName
        _id
      }
      token
    }
  }
`;

export const REGISTER_USER = gql`
  mutation register(
    $firstName: String!
    $lastName: String!
    $email: String!
    $password: String!
  ) {
    register(
      firstName: $firstName
      lastName: $lastName
      email: $email
      password: $password
    ) {
      currentUser {
        firstName
        lastName
      }
      token
    }
  }
`;

export const UPLOAD_FILE = gql`
  mutation updateProfilePicture($file: String!) {
    updateProfilePicture(file: $file)
  }
`;

export const REPORT_BUG = gql`
  mutation reportBug($bugText: String!, $gameId: ID!) {
    reportBug(bugText: $bugText, gameId: $gameId) {
      _id
      text
      author
      createdAt
    }
  }
`;

export const ADD_COMMENT = gql`
  mutation addComment($comment: CommentInput) {
    addComment(comment: $comment) {
      createdAt
      commentBody
      author {
        _id
        firstName
        lastName
        email
        profileImageUrl
      }
    }
  }
`;

export const REMOVE_COMMENT = gql`
  mutation removeComment($commentId: ID!, $bugId: ID!) {
    removeComment(commentId: $commentId, bugId: $bugId) {
      _id
      text
      author
      createdAt
      comments {
        createdAt
        commentBody
        author {
          _id
          firstName
          lastName
          email
          profileImageUrl
        }
      }
    }
  }
`;
