const { GraphQLList, GraphQLInt } = require("graphql");
const DataBaseService = require("../../../Services/DataBaseService");

const getUsers = {
    type: new GraphQLList((require("../../TypeDefs/AppUserType"))),
    args:{ id: {type: GraphQLInt}},
    resolve(_, {id}){
        if(id){
            const row = DataBaseService.selectOne("appUsers", id);
            console.log(row)
            return  row
        }
        
        return  DataBaseService.selectAll("appUsers");
}
};

module.exports = getUsers; 