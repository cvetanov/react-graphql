import express from 'express';
import graphqlHTTP from 'express-graphql';
import _ from 'lodash';
import cors from 'cors';

import { accounts, accountsMap } from './mock';
import schema from './schema';

let app  = express();
let PORT = 3001;

const root = {
  // queries
  account: ({ id }) => accountsMap[id] && accountsMap[id][0],
  accounts: () => accounts,

  // mutations
  addTransaction: ({ input: { accountId, amount } }) => {
    const account = accountsMap[accountId] && accountsMap[accountId][0];
    if (account) {
      const transaction = {
        id: _.uniqueId('transaction-'),
        amount
      };
      account.transactions = [...account.transactions, transaction];
      return transaction;
    }
    throw new Error(`Account with id "${accountId}" not found`);
  }
};

app.use('/graphql', cors(), graphqlHTTP({
  schema,
  rootValue: root,
  graphiql: true,
  formatError: (err) => { console.error(err); return err; }
}));

let server = app.listen(PORT, function () {
  let host = server.address().address;
  let port = server.address().port;

  console.log('GraphQL listening at http://%s:%s', host, port);
});