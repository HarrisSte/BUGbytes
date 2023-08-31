import { gql } from '@apollo/client';

export const QUERY_CURRENT_USER = gql`
  query getCurrentUser($email: String!) {
    currentUser(email: $email) {
      _id
      email
      firstName
      lastName
    }
  }
`;
export const QUERY_GAME = gql`
  query game($gameId: ID) {
    game(gameId: $gameId) {
      bugs {
        _id,
        text,
        author,
        createdAt,
        comments {
          createdAt,
          commentBody,
          author {
            _id,
            firstName
            lastName
            email
            profileImageUrl
          }
        }
      }
    }
  }
`;

