import { gql } from '@apollo/client';

export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      email
      books {
        _id
        bookText
        createdAt
      }
    }
  }
`;

export const QUERY_BOOKS = gql`
  query getbooks {
    books {
      _id
      bookText
      bookAuthor
      createdAt
    }
  }
`;

export const QUERY_SAVED_BOOK = gql`
  query getSinglebook($bookId: ID!) {
    book(bookId: $bookId) {
      _id
      bookText
      bookAuthor
      createdAt
      comments {
        _id
        commentText
        createdAt
      }
    }
  }
`;
