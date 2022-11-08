const { GraphQLObjectType } = require("graphql");
const createPath = require("./Resolvers/Create/createPath.js");
const createUser = require("./Resolvers/Create/createUser.js");

const Mutation = new GraphQLObjectType({
    name: "Mutation",
    fields: {
        createUser: createUser,
        createPath: createPath
    }
}) 
module.exports = Mutation;