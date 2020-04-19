const express = require('express');
const graphqlHTTP = require('express-graphql'); // variable name not equal to package name just by convention

// invoke the express function to create our app 
const app = express();

// route '/graphql' so that express understand we want to interact with Graphql so use graphqlHTTP 
app.use('/graphql', graphqlHTTP({
    // schema will tell express-graphql about the data (data-types, properties, relationships) & how the graph will look

})) 

app.listen(4000, () => console.log("Listening for request on port 4000"));