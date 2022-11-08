const { GraphQLList, GraphQLInt } = require("graphql");
const DataBaseService = require("../../../Services/DataBaseService");

const getHikkers = {
    type: new GraphQLList((require("../../TypeDefs/HikkerType"))),
    args:{ id: {type: GraphQLInt}},
    resolve(_, {id}){
        if(id){
            const row = DataBaseService.selectOne("hikkers", id);
            return  row
        }
        
        return  DataBaseService.selectAll("hikkers");
}
};

module.exports = getHikkers; 