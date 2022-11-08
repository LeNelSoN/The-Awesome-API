const { GraphQLObjectType, GraphQLInt, GraphQLString, GraphQLID } = require("graphql");
const DataBaseService = require("../../Services/DataBaseService");

const appUserType = new GraphQLObjectType({
    name: "appUsers",
    fields: () => ({

        id: {type: GraphQLID},
        login: {type: GraphQLString},
        password: {type: GraphQLString},
        isAdmin: {type: GraphQLInt},
        hikker: {

            type: (require("../TypeDefs/HikkerType")),
            async resolve({hikkerId}){
                if(!hikkerId){
                    return null;
                }

                const row = await DataBaseService.selectOne('hikkers', hikkerId);
                return row[0];
                
            }
        }

    })
    
}) 

module.exports = appUserType;