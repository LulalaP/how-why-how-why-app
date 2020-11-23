import { gql } from '@apollo/react-hooks';

export const AUTHORIZE = gql`
  mutation authorize($username: String!, $password: String!) {
    authorize(credentials: { username: $username, password: $password }) {
      accessToken
    }
  }
`;

export const CREATE_REVIEW = gql`
  mutation createReview( $articleId: String!, $review: String! ) {
    createReview( review: { articleId: $articleId, text: $review } ) {
      id
      articleId
    }
  }
`;

export const CREATE_USER = gql`
  mutation createUser($username: String!, $password: String!) {
    createUser(user: { username: $username, password: $password }) {
      username
    }
  }
`;

export const DELETE_REVIEW = gql`
  mutation deleteReview( $id: ID! ) {
    deleteReview( id: $id )
  }
`;
