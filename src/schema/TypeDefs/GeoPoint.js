const { GraphQLInputObjectType, GraphQLNonNull, GraphQLFloat } = require("graphql");

const GeoPoint = new GraphQLInputObjectType({

    name: 'GeoPoint',
    fields: {
      latitude: { type: new GraphQLNonNull(GraphQLFloat) },
      longitude: { type: new GraphQLNonNull(GraphQLFloat) },
    
    }

  }
);

module.exports = GeoPoint;