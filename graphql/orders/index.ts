import { ApolloServer, BaseContext } from '@apollo/server';
import { ApolloServerPluginInlineTraceDisabled } from '@apollo/server/plugin/disabled';
import { buildSubgraphSchema } from '@apollo/subgraph';

import resolvers from './resolvers';
import typeDefs from './typeDefs';

const schema = buildSubgraphSchema({ typeDefs, resolvers });
export const server = new ApolloServer<BaseContext>({
  schema,
  plugins: [ApolloServerPluginInlineTraceDisabled()],
  introspection: true
});
