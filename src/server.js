const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const {GraphQLSchema} = require('graphql');
const Mutation = require('./schema/Mutation');
const Query = require('./schema/Query');
const port = process.env.PORT || 5000;
const app = express();

const schema = new GraphQLSchema({query:Query, mutation: Mutation})

app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true,
}));

app.listen(port, () => console.log(`Now browse to localhost:${port}/graphql`));