import React from 'react';
import {
  gql,
  graphql,
} from 'react-apollo';
import { TransactionList } from './Transaction';

const accountsListQuery = gql`
   query AccountsListQuery {
     account(id: "account-1") {
       id,
       balance,
       transactions {
        id,
        amount
       }
     }
   }
 `;

const Account = ({ data: { loading, error, account }}) => {
  if (loading) {
    return <div>Account data loading...</div>
  }
  if (error) {
    return <div>Error loading account data!</div>
  }

  return (
    <div>
      <span>Total balance: {account.balance}</span>
      <div>
        <TransactionList transactions={account.transactions || []} />
      </div>
    </div>
  )
};

export const AccountWithData = graphql(accountsListQuery)(Account);
