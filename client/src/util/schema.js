export const typeDefs = `
type Channel {
  id: ID!
  name: String
}

type Transaction {
  id: ID!
  amount: Int
}

type Account {
  id: ID!
  balance: Int
  transactions: [Transaction]
}

type Query {
  channels: [Channel],
  account: Account,
  transactions: [Transaction]
}
`;
