import React, { Component } from 'react';
import { gql } from 'apollo-boost';
import { graphql } from 'react-apollo';

/* Queries */
const getAuthorsQuery = gql`
{
  authors{
    name
    id
  }
}
`;

/* Component */
class AddBook extends Component {



  /* Functions */
  displayAuthors = () => {
    let data = this.props.data;
    if (data.loading) {
      return (<option disabled>Loading Authors..</option>)
    } else {
      return data.authors.map(author => {
        return (
          <option key={author.id} value={author.id}>{author.name}</option>
        )
      })
    }
  }

  render() {
    return (
      <form id="add-book">
        <div className="field">
          <label htmlFor="book-name">Book Name:&nbsp;</label>
          <input type="text" name="book-name" />
        </div>


        <div className="field">
          <label htmlFor="genre">Genre:&nbsp;</label>
          <input type="text" name="genre" />
        </div>


        <div className="field">
          <label htmlFor="author-name">Author:&nbsp;</label>
          <select name="author-name">
            <option>Select author</option>
            {this.displayAuthors()}
          </select>
        </div>

        <button>+</button>
      </form>
    );
  }
}

export default graphql(getAuthorsQuery)(AddBook);