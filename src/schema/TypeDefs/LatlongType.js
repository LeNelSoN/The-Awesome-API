const { GraphQLObjectType, GraphQLString, GraphQLID } = require("graphql");

const LatlongType = new GraphQLObjectType({
    name: "latlongs",
    fields: () => ({

        id: {type: GraphQLID},
        latitude: {type: GraphQLString},
        longitude: {type: GraphQLString},
        
    })
}) 

module.exports = LatlongType;