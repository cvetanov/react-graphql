import { buildSchema } from 'graphql';

const schema = buildSchema(`
  input TransactionInput {
    accountId: String,
    amount: Int
  }
  
  type Transaction {
    id: String!
    amount: Int
  }
  
  type Account {
    id: String!
    balance: Int
    transactions: [Transaction]
  }
  
  type Query {
    account(id: String): Account,
    accounts: [Account]
  }
  
  type Mutation {
    addTransaction(input: TransactionInput): Transaction
  }
`);

export default schema;
