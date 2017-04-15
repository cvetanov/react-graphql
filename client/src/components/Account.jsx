import React from 'react';
import {
  gql,
  graphql,
} from 'react-apollo';
import { TransactionList } from './Transaction';

const accountById = gql`
   query AccountQuery($accountId: String) {
     account(id: $accountId) {
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
  if (!account) {
    return <div>No data</div>
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

export const AccountWithData = graphql(accountById, {
  options: ({ accountId }) => ({
    variables: {
      accountId
    }
  })
})(Account);

AccountWithData.propTypes = {
  accountId: React.PropTypes.string.isRequired
};
