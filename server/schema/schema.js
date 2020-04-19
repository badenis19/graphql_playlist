const graphql = require('graphql');

// This file is to describe the schema (Object types, their relationship, how to reach into the graph to interact with data e.g. query, retrieve, mutate)

const { GraphQLObjectType, GraphQLString } = graphql; // extracting GraphQLObjectType, datatypes from graphql package 


// Defining object type and data types
const BookType = new GraphQLObjectType({
    name: 'Book',
    fields: () => ({
        id: { type: GraphQLString },
        name: { type: GraphQLString },
        genre: { type: GraphQLString }
    })
})