const { ApolloServer } = require('@apollo/server');
const { ApolloServerPluginInlineTraceDisabled } = require('@apollo/server/plugin/disabled');
const { buildSubgraphSchema } = require('@apollo/subgraph');

import typeDefs from './typeDef';
import resolvers from './resolvers';

export const server = new ApolloServer({
  schema: buildSubgraphSchema({ typeDefs, resolvers }),
  plugins: [ApolloServerPluginInlineTraceDisabled()],
  introspection: true
});
