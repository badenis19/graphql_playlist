import React, {Component} from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo'; // helps react to understand Apollo

/* Component */
import BookList from './components/BookList'
import AddBook from './components/AddBook';

// apollo client setup
const client = new ApolloClient({
  uri: "http://localhost:4000/graphql" // endpoint that handles queries. Apollo know we will make to this endpoint from our application
})

// Wrapping with AppoloProvider allow to get data from endpoint and inject data between tags.
class App extends Component {
  render(){
    return (
      <ApolloProvider client={client}> 
        <div id="main">
          <h1>Bruno's Reading List</h1>
          <BookList />
          <AddBook />
        </div>
      </ApolloProvider>
    );
}}

export default App;
