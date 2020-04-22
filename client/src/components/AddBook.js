import React, { Component } from 'react';
import { graphql } from 'react-apollo';

/* Queries */
import { getAuthorsQuery } from '../queries/queries'

/* Component */
class AddBook extends Component {

  constructor(props){
    super(props);

    this.state = {
      name: "",
      genre: "",
      authorId: ""
    }

  }

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

  submitForm(e){
    e.preventDefault() // prevent default behavior of event, so prevents Page from resfreshing on form submit
    console.log(this.state)
  }

  render() {
    return (
      <form id="add-book" onSubmit={this.submitForm.bind(this)}>
        <div className="field">
          <label htmlFor="book-name">Book Name:&nbsp;</label>
          <input type="text" onChange={(e) => this.setState({name: e.target.value}) } name="book-name" />
        </div> 

        <div className="field"> 
          <label htmlFor="genre">Genre:&nbsp;</label>
          <input type="text" onChange={(e) => this.setState({genre: e.target.value}) } name="genre" />
        </div>

        <div className="field">
          <label htmlFor="author-name">Author:&nbsp;</label>
          <select name="author-name" onChange={(e) => this.setState({authorId: e.target.value}) }>
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