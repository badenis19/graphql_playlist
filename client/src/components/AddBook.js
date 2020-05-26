import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { flowRight as compose } from 'lodash'; //using lodash as compose was removed from react-apollo

/* Queries */
import { getAuthorsQuery, addBookMutation, getBooksQuery } from '../queries/queries'

class AddBook extends Component {

  constructor(props) {
    super(props);

    this.state = {
      name: "",
      genre: "",
      authorId: ""
    }
  }

  /* Functions */
  displayAuthors = () => {
    let data = this.props.getAuthorsQuery;
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

  submitForm(e) {
    e.preventDefault() // prevent default behavior of event, so prevents Page from resfreshing on form submit
    this.props.addBookMutation({ // addBookMutation refers to addBookMutation name (key) in the compose function at bottom of the page
      variables: {
        name: this.state.name,
        genre: this.state.genre,
        authorId: this.state.authorId
      },
      refetchQueries: [{ query: getBooksQuery }] // to refetch update page when new book is created
    }); // running mutation. To create new record, add new mutation on Form submission
  }

  render() {
    return (
      <form id="add-book" onSubmit={this.submitForm.bind(this)}>
        <div className="field">
          <label htmlFor="book-name">Book Name:&nbsp;</label>
          <input type="text" onChange={(e) => this.setState({ name: e.target.value })} name="book-name" />
        </div>

        <div className="field">
          <label htmlFor="genre">Genre:&nbsp;</label>
          <input type="text" onChange={(e) => this.setState({ genre: e.target.value })} name="genre" />
        </div>

        <div className="field">
          <label htmlFor="author-name">Author:&nbsp;</label>
          <select name="author-name" onChange={(e) => this.setState({ authorId: e.target.value })}>
            <option>Select author</option>
            {this.displayAuthors()}
          </select>
        </div>
        <button>+</button>

      </form>
    );
  }
}

// To bind single query/mutation to a Component
// export default graphql(getAuthorsQuery)(AddBook);

// To bind many queries/mutations to a Component and giving them a name to access them in the application. E.g. this.props.addBookMutation();
export default compose(
  graphql(getAuthorsQuery, { name: "getAuthorsQuery" }),
  graphql(addBookMutation, { name: "addBookMutation" })
)(AddBook);