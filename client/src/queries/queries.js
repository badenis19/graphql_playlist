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

export { getBooksQuery, getAuthorsQuery }