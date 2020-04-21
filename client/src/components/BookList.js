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
  render() {
    console.log(this.props)
    return (
      <div>
        <ul id="book-list">
          <li>Book name</li>
        </ul>
      </div>
    );
  }
}
// function BookList() {
//   console.log(this.props)
//   return (
//     <div>
//       <ul id="book-list">
//         <li>Book name</li>
//       </ul>
//     </div>
//   );
// }

/* Binds the query getBooksQuery with the BookList Component using graphql() function imported.
BookList Component now has access to the data returned from getBooksQuery query. Stored in the props */
export default graphql(getBooksQuery)(BookList); 
