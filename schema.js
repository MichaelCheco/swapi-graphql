const{ GraphQLObjectType, GraphQLInt, GraphQLString, GraphQLBoolean, GraphQLList, GraphQLSchema } = require('graphql');
const axios = require('axios');

const Person = new GraphQLObjectType({
    name: 'Person',
    fields: () => ({
        birth_year: {type: GraphQLString},
        name: {type: GraphQLString},
        mass: {type: GraphQLInt},
        skin_color: {type: GraphQLString},
        gender:{ type: GraphQLString},
        eye_color: {type: GraphQLString},
    })
})

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        people: {
            type: new GraphQLList(Person),
            resolve(parent, args) {
                return axios.get('https://swapi.co/api/people/')
                .then(res => res.data.results)
            }
        }
    }
})

module.exports = new GraphQLSchema({
    query: RootQuery
})