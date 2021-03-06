import { gql } from 'apollo-boost'; // package needed to parse graphql. Now we can create queries.

/* Queries */

// Get all
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

// Get single 
const getBookQuery = gql`
    query($id:ID){
        book(id:$id){
            id
            name
            genre
            author{
                id
                name
                age
                books{
                    name
                    id
                }
            }
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

export { getBooksQuery, getAuthorsQuery, addBookMutation, getBookQuery }