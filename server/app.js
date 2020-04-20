const express = require('express');
const graphqlHTTP = require('express-graphql'); // variable name not equal to package name just by convention
const schema = require('./schema/schema');
const app = express(); // invoke the express function to create our app 
const mongoose = require('mongoose');
require('dotenv/config');


// connect to mlab DB
mongoose.connect(process.env.URI,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    },
    () => console.log("connected to mongodb 🥭"))


/* MIDDLEWARE */

// route '/graphql' so that express understand we want to interact with Graphql so use graphqlHTTP 
app.use('/graphql', graphqlHTTP({
    // schema will tell express-graphql about the data (data-types, properties, relationships) & how the graph will look
    schema: schema, // with ES6 could only put schema as the name are the same
    graphiql: true
}))


app.listen(4000, () => console.log("Listening for request on port 4000"));