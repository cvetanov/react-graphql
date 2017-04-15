import React from 'react';
import {
  gql,
  graphql,
} from 'react-apollo';

const accountsQuery = gql`
   query {
     accounts {
       id
     }
   }
 `;

const AccountsList = ({ data: { loading, error, accounts }, onChange}) => {
  if (loading) {
    return <div>Account data loading...</div>
  }
  if (error) {
    return <div>Error loading account data!</div>
  }

  return (
    <div>
      <span>Available accounts</span>
      <div>
        <select onChange={onChange}>
          <option value="" />
          {accounts.map(account => <option value={account.id} key={account.id}>{account.id}</option>)}
        </select>
      </div>
    </div>
  )
};

AccountsList.propTypes = {
  onChange: React.PropTypes.func
};

export const AccountsWithData = graphql(accountsQuery)(AccountsList);
