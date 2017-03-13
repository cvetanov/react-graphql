import {
  ApolloClient,
  createNetworkInterface
} from 'react-apollo';


export const client = new ApolloClient({
  networkInterface: createNetworkInterface({
    uri: 'http://localhost:3001/graphql',
  }),
});
