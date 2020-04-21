import React, {Component} from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo'; // helps react to understand Apollo

// components
import BookList from './components/BookList'

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
          <p>Bruno's Reading List</p>
          <BookList />
        </div>
      </ApolloProvider>
    );
}}

// function App() {
//   return (
//     <ApolloProvider client={client}> 
//       <div id="main">
//         <p>Bruno's Reading List</p>
//         <BookList />
//       </div>
//     </ApolloProvider>
//   );
// }

export default App;
