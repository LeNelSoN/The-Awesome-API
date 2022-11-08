const { GraphQLString, GraphQLList} = require("graphql");
const DataBaseService = require("../../../Services/DataBaseService");
const GeoPoint = require("../../TypeDefs/GeoPoint");

const createPath = {
    type: GraphQLString,
    args:{ 
        name: {type: GraphQLString},
        description: {type: GraphQLString},
    },
    async resolve(_, {name, description}){
        
        console.log(name, description)

    }
    
};

module.exports = createPath; 