// This file is to describe the schema (Object types, their relationship, how to reach into the graph to interact with data e.g. query, retrieve, mutate)
const graphql = require('graphql'); // or import graphql from 'graphql';
const _ = require('lodash');
const Book = require("../models/book");
const Author = require("../models/author");

const { 
    GraphQLObjectType,
    GraphQLString,
    GraphQLSchema,
    GraphQLID, 
    GraphQLInt,
    GraphQLList
    } = graphql; // extracting GraphQLObjectType and other from graphql imported package 

// Defining Object (that we can query) type and data types
const BookType = new GraphQLObjectType({
    name: 'Book',
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        genre: { type: GraphQLString },
        author : { 
            type: AuthorType,
            resolve(parent,args){
                // return _.find(authors, {id: parent.authorId})
            }
        }
    })
})

const AuthorType = new GraphQLObjectType({
    name: 'Author',
    fields: () => ({
        id: { type: GraphQLString },
        name: { type: GraphQLString },
        age: { type: GraphQLInt },
        books: { // to display the many books an author can have
            type: new GraphQLList(BookType), // Be mindful of type different notation for List
            resolve(parent, args){
                // return _.filter(books, {authorId: parent.id}) // filtering the books array to only have books with specified authorId
            }
        }
    })
})

// Defining how do we initially get to the graph to grab data 
const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        book: {  // name used to make the query on front-end ( E.g. book(id: 1 ) )
            type: BookType, // when someone queries this BookType, expects arguments to be passed too (below) to know which book they want to query
            args: { id: {type: GraphQLID}}, // expect the ID to come along with the query (as in Booktype Object)
            resolve(parent,args){ // acts after receivin query. 'parent' used with relationships | 'args' is the args key just above so 'id'
                // code to get specific data from DB / other source
                // return _.find(books, {id: args.id}) // with lodash .find() method 
            }
        },
        author: {
            type: AuthorType,
            args: { id: {type: GraphQLID}},
            resolve(parent,args){
                // return _.find(authors, {id: args.id})
            }
        },
        books: { // To get all the books
            type: new GraphQLList(BookType),
            resolve(parent,args){
                // return books // books as in the collection of data
            }
        },
        authors: {
            type: new GraphQLList(AuthorType),
            resolve(parent,args){
                // return authors
            }
        }
    }
})


// Defining which query the user can use when making queries from the front-end
module.exports = new GraphQLSchema({ // or export default new GraphQLSchema({
    query: RootQuery 
})


