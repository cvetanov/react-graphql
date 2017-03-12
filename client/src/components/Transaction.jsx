import React from 'react';

export const Transaction = ({ amount }) => <div>Transaction amount: {amount}</div>;

export const TransactionList = ({ transactions }) => (
  <ul>
    {transactions.map(transaction =>
      <Transaction key={transaction.id} amount={transaction.amount} />
    )}
  </ul>
);
