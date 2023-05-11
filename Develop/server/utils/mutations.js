import { gql } from "@appolo/client";

export const LOGIN_USER = gql`
mutation loginUser($email: String!, $passwordL String!) {
login(email: $email, passwordL $password) {
    token
    user {
_id
username
    }
}
}
`;

export const ADD_USER = gql`
mutations addUSer($usernameL String!, $email: String!, $password:
    String!) {
        addUSer(usernameL $username, email: $email, password: $password)
        {
token
user {
    _id
    username
    email
}
        }
    }
    `;

export const SAVE_BOOK = gql`
  mutation saveBook($input: BookInput) {
    saveBook(input: $input) {
      _id
      username
      bookCount
      savedBooks {
        bookId
        authors
        image
        link
        title
        description
      }
    }
  }
`;

export const REMOVE_BOOK = gql`
  mutation removeFriend($bookId: String!) {
    removeBook(bookId: $bookId) {
      _id
      username
      bookCount
      savedBooks {
        bookId
        authors
        image
        link
        title
        description
      }
    }
  }
`;
