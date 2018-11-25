const {
  GraphQLObjectType,
  GraphQLInt,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
  GraphQLSchema,
  GraphQLNonNull
} = require("graphql");
const axios = require("axios");

const Person = new GraphQLObjectType({
  name: "Person",
  fields: () => ({
    birth_year: { type: GraphQLString },
    name: { type: GraphQLString },
    mass: { type: GraphQLInt },
    skin_color: { type: GraphQLString },
    gender: { type: GraphQLString },
    eye_color: { type: GraphQLString }
  })
});

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    people: {
      type: new GraphQLList(Person),
      resolve(parent, args) {
        return axios
          .get("https://swapi.co/api/people/")
          .then(res => res.data.results);
      }
    }
  }
});

const mutation = new GraphQLObjectType({
    name:'Mutation',
    fields:{
        addPerson: {
            type: Person,
            args: {
                birth_year: { type: new GraphQLNonNull(GraphQLString) },
                name: { type: new GraphQLNonNull(GraphQLString) },
                mass: { type: new GraphQLNonNull(GraphQLInt) },
                skin_color: { type: new GraphQLNonNull(GraphQLString) },
                gender: { type: new GraphQLNonNull(GraphQLString) },
                eye_color: { type: new GraphQLNonNull(GraphQLString) }
            },
            resolve(parent, args) {
                return axios.post('https://swapi.co/api/people/', {
                    birth_year: args.birth_year,
                    name: args.name,
                    mass: args.mass,
                    skin_color: args.skin_color,
                    gender: args.gender,
                    eye_color: args.eye_color
                })
                .then(res => res.data)
            }
        }
    }
})

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation
});
