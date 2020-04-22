import { gql } from 'apollo-boost'; // package needed to parse graphql. Now we can create queries.

/* Queries */
const getBooksQuery = gql`
{
  books{
    name
    id
  }
}
`;

const getAuthorsQuery = gql`
{
  authors{
    name
    id
  }
}
`;

/* Mutations */

// Create
const addBookMutation = gql`
    mutation($name: String!, $genre: String!, $authorId: ID!){
        addBook(name: $name, genre: $genre, authorId: $authorId){ 
            name
            id
        }
    }
`;

export { getBooksQuery, getAuthorsQuery, addBookMutation }