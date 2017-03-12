import _ from 'lodash';
import {
  ApolloClient
} from 'react-apollo';
import {
  makeExecutableSchema,
  addMockFunctionsToSchema
} from 'graphql-tools';
import { mockNetworkInterfaceWithSchema } from 'apollo-test-utils';

import { typeDefs } from './schema';

const mocks = {
  Int: () => 42,
  Account: () => ({
    id: _.uniqueId(),
    balance: _.random(1000, 10000)
  }),
  Transaction: () => ({
    id: _.uniqueId(),
    amount: _.random(100, 500)
  })
};

const schema = makeExecutableSchema({ typeDefs });

addMockFunctionsToSchema({ schema, mocks });

const mockNetworkInterface = mockNetworkInterfaceWithSchema({ schema });

export const client = new ApolloClient({
  networkInterface: mockNetworkInterface
});
