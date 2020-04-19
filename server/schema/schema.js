// This file is to describe the schema (Object types, their relationship, how to reach into the graph to interact with data e.g. query, retrieve, mutate)

const graphql = require('graphql'); // or import graphql from 'graphql';
const _ = require('lodash');
const { 
    GraphQLObjectType,
    GraphQLString,
    GraphQLSchema,
    GraphQLID 
    } = graphql; // extracting GraphQLObjectType and other from graphql imported package 

// dummy data TO DELETE LATER WHEN USING MONGODB
const books = [
    {id: '1', name: 'book1', genre: "comedy"},
    {id: '2', name: 'book2', genre: "comedy"},
    {id: '3', name: 'book3', genre: "thriller"}
];

// Defining Object type and data types
const BookType = new GraphQLObjectType({
    name: 'Book',
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        genre: { type: GraphQLString }
    })
})

// Defining how do we initially get to the graph to grab data 
const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        book: {  // when someone queries this BookType, expects arguments to be passed too (below) to know which book they want to query
            type: BookType,
            args: { id: {type: GraphQLID}}, // expect the ID to come along with the query (as in Booktype Object)
            resolve(parent,args){ // acts after receivin query. 'parent' used with relationships | 'args' is the args key just above so 'id'
                // code to get specific data from DB / other source
                return _.find(books, {id: args.id}) // with lodash "_"
            }
        }
    }
})



// Defining which query the user can use when making queries from the front-end
module.exports = new GraphQLSchema({ // or export default new GraphQLSchema({
    query: RootQuery 
})


// const AuthorType = new GraphQLObjectType({
//     name: 'Author',
//     fields: () => ({
//         id: { type: GraphQLString },
//     })
// })