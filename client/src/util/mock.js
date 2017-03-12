import {
  ApolloClient
} from 'react-apollo';
import {
  makeExecutableSchema,
  addMockFunctionsToSchema
} from 'graphql-tools';
import { mockNetworkInterfaceWithSchema } from 'apollo-test-utils';

import { typeDefs } from './schema';

const schema = makeExecutableSchema({ typeDefs });

addMockFunctionsToSchema({ schema });

const mockNetworkInterface = mockNetworkInterfaceWithSchema({ schema });

export const client = new ApolloClient({
  networkInterface: mockNetworkInterface
});
