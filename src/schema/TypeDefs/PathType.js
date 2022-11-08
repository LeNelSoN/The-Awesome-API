const { GraphQLObjectType, GraphQLString, GraphQLID, GraphQLList } = require("graphql");
const DataBaseService = require("../../Services/DataBaseService");

const PathType = new GraphQLObjectType({
    name: "paths",
    fields: () => ({

        id: {type: GraphQLID},
        name: {type: GraphQLString},
        description: {type: GraphQLString},
        hikker: {
            type: (require("../TypeDefs/HikkerType")),
            async resolve({hikkerId}){
        
                if(!hikkerId){
                    return null;
                }
        
                const row = await DataBaseService.selectOne('hikkers', hikkerId);
                return row[0];                
            }
        },
        latlongs: {        
            type: new GraphQLList((require("./LatlongType"))),
            resolve(parent){
                return DataBaseService.selectWhere('latlongs', 'pathId', parent.id);
            }
        }
        
    })
}) 

module.exports = PathType;