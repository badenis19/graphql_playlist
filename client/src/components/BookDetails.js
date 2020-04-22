import React, { Component } from 'react';
import { graphql } from 'react-apollo';

/* Queries */
import { getBookQuery } from "../queries/queries";

class BookDetails extends Component {

  displayBookDetails = () => {
    const { book } = this.props.data; // ES6 destructuring same as const book = this.props.data.book
    if (book) {
      return (
        <div>
          <h2>{book.name}</h2>
          <p>{book.genre}</p>
          <p>{book.author.name}</p>
          <p>All books by this author:</p>
          <ul className="other-books">
            {book.author.books.map(item => {
              return (
                <li key={item.id}>{item.name}</li>
              )
            })}
          </ul>
        </div>
      )
    } else {
      return (
        <div>No boos selected..</div>
      )
    }
  }

  render() {
    return (
      <div id="book-details">
        <p>Output book details here</p>
        {this.displayBookDetails()}
      </div>
    )
  };
}


export default graphql(getBookQuery, { // adding second argument to pass id to $query argument in the queries.js
  options: (props) => {
    return {
      variables: {
        id: props.bookId
      }
    }
  }
})(BookDetails);