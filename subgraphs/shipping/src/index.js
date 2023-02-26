const { ApolloServer } = require('@apollo/server');
const { ApolloServerPluginInlineTraceDisabled } = require('@apollo/server/plugin/disabled');
const { buildSubgraphSchema } = require('@apollo/subgraph');
const typeDefs = require('./typedefs');
const resolvers = require('./resolvers');

export const server = new ApolloServer({
  schema: buildSubgraphSchema({ typeDefs, resolvers }),
  plugins: [ApolloServerPluginInlineTraceDisabled],
  introspection: true
});
