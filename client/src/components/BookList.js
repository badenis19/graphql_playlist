import React, { Component } from 'react';
import { gql } from 'apollo-boost'; // package needed to parse graphql. Now we can create queries.
import { graphql } from 'react-apollo'; // To bind Apollo with React Component


/* Queries */
const getBooksQuery = gql`
{
  books{
    name
    id
  }
}
`;

/* Component */
class BookList extends Component {

  /* Functions */
  displayBooks = () => { // no need for const/var when defining in component
    let data = this.props.data; // to access props with result of the query
    if (data.loading) { // Making a check using the loading property in data to check if the data has been loaded 
      return (<div>Loading books..</div>)
    } else {
      return data.books.map(book => {
        return (
          <li key={book.id}>{book.name}</li>
        )
      })
    }
  }

  render() {
    return (
      <div>
        <ul id="book-list">
          {this.displayBooks()}
        </ul>
      </div>
    );
  }
}

/* Binds the query getBooksQuery with the BookList Component using graphql() function imported.
BookList Component now has access to the data returned from getBooksQuery query. Stored in the props */
export default graphql(getBooksQuery)(BookList); 
