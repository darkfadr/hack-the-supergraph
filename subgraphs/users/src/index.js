const { ApolloServer } = require('@apollo/server');
const { ApolloServerPluginInlineTraceDisabled } = require('@apollo/server/plugin/disabled');
const { buildSubgraphSchema } = require('@apollo/subgraph');

const resolvers = require('./resolvers');
const { typeDefs } = require('./typeDefs');

export const server = new ApolloServer({
  schema: buildSubgraphSchema({ typeDefs, resolvers }),
  plugins: [ApolloServerPluginInlineTraceDisabled],
  introspection: true
});
