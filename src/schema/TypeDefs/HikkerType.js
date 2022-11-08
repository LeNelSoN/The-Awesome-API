const { GraphQLObjectType, GraphQLString, GraphQLID, GraphQLList} = require("graphql");
const DataBaseService = require("../../Services/DataBaseService");

const HikkerType = new GraphQLObjectType({
    name: "hikkers",
    fields: () => ({
        id: {type: GraphQLID},
        username: {type: GraphQLString},
        address: {type: GraphQLString},
        appUser: {

            type: (require("./AppUserType")),
            async resolve({appUserId}){
                if(!appUserId){
                    return null;
                }

                const row = await DataBaseService.selectOne('appUsers', appUserId);
                return row[0];

            }

        },
        paths: {
            type: new GraphQLList((require("./PathType"))),
            async resolve(parent){
                return DataBaseService.selectWhere("paths", "hikkerId", parent.id);
            }
        }

    })

}) 

module.exports = HikkerType;