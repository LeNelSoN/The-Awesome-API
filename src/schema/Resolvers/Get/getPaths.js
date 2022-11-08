const { GraphQLList, GraphQLInt } = require("graphql");
const DataBaseService = require("../../../Services/DataBaseService");

const getPaths = {
    type: new GraphQLList((require("../../TypeDefs/PathType"))),
    args:{ id: {type: GraphQLInt}},
    resolve(_, {id}){
        if(id){
            const row = DataBaseService.selectOne("paths", id);
            return  row
        }
        
        return  DataBaseService.selectAll("paths");
}
};

module.exports = getPaths; 