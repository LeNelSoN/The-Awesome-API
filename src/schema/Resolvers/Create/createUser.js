const { GraphQLString, GraphQLNonNull } = require("graphql");
const DataBaseService = require("../../../Services/DataBaseService");

const createUser = {
    type: GraphQLString,
    args:{ 
        login: {type: GraphQLNonNull(GraphQLString) },
        password: {type: GraphQLNonNull(GraphQLString) },
        username: {type: GraphQLNonNull(GraphQLString) },
        address: {type: GraphQLString}
    },
    async resolve(_, {login, password, username, address}){
        
        const result = await DataBaseService.createUserAccount({login, password, username, address})
        
        if(result == true){

            return `L'Utilisateur ${username} a été créé`;

        }

    }
};

module.exports = createUser; 