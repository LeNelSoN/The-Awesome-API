const { GraphQLObjectType } = require("graphql");
const getHikkers = require("./Resolvers/Get/getHikkers.js");
const getPaths = require("./Resolvers/Get/getPaths.js");
const getUsers = require("./Resolvers/Get/getUsers.js");

const Query = new GraphQLObjectType({
    name: "Query",
    fields: {
        getUsers: getUsers,
        getHikkers: getHikkers,
        getPaths: getPaths
    }
}) 
module.exports = Query;