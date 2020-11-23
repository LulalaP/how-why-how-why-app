import { gql } from 'apollo-boost';

const ARTICLE_DETAILS = gql`
  fragment articleDetails on Article {
    id
    title
    titleEn
    userId
    user {
      id
      username
    }
    createdAt
    reviewCount
    viewsCount
    likesCount
    url
    description
    text
  }
`;

const REVIEW_DETAILS = gql`
  fragment reviewDetails on Review {
    id
    text
    createdAt
    user {
      id
      username
    }
  }
`;

export const GET_ARTICLES = gql`
  query getArticles(
    $orderBy: AllArticlesOrderBy
    $orderDirection: OrderDirection
    $searchKeyword: String
    $first: Int
    $after: String
  ) {
    articles(
      orderBy: $orderBy
      orderDirection: $orderDirection
      searchKeyword: $searchKeyword
      first: $first
      after: $after
    ) {
      edges {
        node {
          ...articleDetails
        }
        cursor
      }
      pageInfo {
        endCursor
        startCursor
        totalCount
        hasNextPage
      }
    }
  }
  ${ARTICLE_DETAILS}
`;

export const GET_ARTICLE = gql`
  query getArticle( $id: ID!, $first: Int!, $after: String){
    article(id: $id ) {
      ...articleDetails
      reviews (first: $first, after: $after) {
        edges {
          node {
            article {
              id
              title
            }
            ...reviewDetails
          }
          cursor
        }
        pageInfo {
          endCursor
          startCursor
          totalCount
          hasNextPage
        }
      }
    }
  }
  ${ARTICLE_DETAILS}
  ${REVIEW_DETAILS}
`;

export const GET_AUTHORIZED_USER = gql`
  query getAuthorizedUser($includeReviews: Boolean = false, $first: Int, $after: String) {
    authorizedUser {
      id
      username
      reviews (first: $first, after: $after) {
        edges @include(if: $includeReviews) {
          node {
            ...reviewDetails
          }
          cursor
        }
        pageInfo {
          endCursor
          startCursor
          totalCount
          hasNextPage
        }
      }
    }
  }
  ${REVIEW_DETAILS}
`;
