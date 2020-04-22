import React, { Component } from 'react';
import { graphql } from 'react-apollo'; // To bind Apollo with React Component

/* Queries */
import { getBooksQuery } from '../queries/queries'

/* Component */
import BookDetails from '../components/BookDetails';


class BookList extends Component {

  constructor(props) {
    super(props);

    this.state = {
      selected: null // keeps track of the id of whatever book is clicked on. (null because initial state)
    }
  }

  /* Functions */
  displayBooks = () => { // no need for const/var when defining in component
    let data = this.props.data; // to access props with result of the query
    if (data.loading) { // Making a check using the loading property in data to check if the data has been loaded 
      return (<div>Loading books..</div>)
    } else {
      return data.books.map(book => {
        return (
          <li onClick={(e) => this.setState({ selected: book.id })} key={book.id}>{book.name}</li>
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
        <BookDetails bookId={this.state.selected} />
      </div>
    );
  }
}

/* Binds the query getBooksQuery with the BookList Component using graphql() function imported.
BookList Component now has access to the data returned from getBooksQuery query. Stored in the props */
export default graphql(getBooksQuery)(BookList); 
