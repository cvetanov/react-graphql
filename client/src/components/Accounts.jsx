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

const accountPropType = React.PropTypes.shape({
  id: React.PropTypes.string
});

export const accountsQueryPropType = React.PropTypes.shape({
  loading: React.PropTypes.bool,
  error: React.PropTypes.shape({}),
  accounts: React.PropTypes.arrayOf(accountPropType)
});

export const AccountSelection = ({ accounts, value, onChange }) => {
  return (
    <select onChange={onChange} value={value}>
      <option value="" />
      {accounts.map(account => <option value={account.id} key={account.id}>{account.id}</option>)}
    </select>
  );
};
AccountSelection.propTypes = {
  accounts: React.PropTypes.arrayOf(accountPropType),
  value: React.PropTypes.string,
  onChange: React.PropTypes.func.isRequired
};

const AccountsList = ({ data: { loading, error, accounts }, value, onChange}) => {
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
        <AccountSelection accounts={accounts} value={value} onChange={onChange} />
      </div>
    </div>
  )
};

AccountsList.propTypes = {
  data: accountsQueryPropType,
  value: React.PropTypes.string,
  onChange: React.PropTypes.func
};


export const AccountsWithData = graphql(accountsQuery)(AccountsList);

AccountsWithData.propTypes = {
  value: React.PropTypes.string,
  onChange: React.PropTypes.func
};
