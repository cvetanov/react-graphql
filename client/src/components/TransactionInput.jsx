import React, { Component } from 'react';
import { gql, graphql, compose } from 'react-apollo';
import { AccountSelection, accountsQueryPropType } from './Accounts';

class TransactionInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      accountId: '',
      amount: 0
    };
    this.changeAccountId = this.changeAccountId.bind(this);
    this.changeAmount = this.changeAmount.bind(this);
  }

  changeAccountId(event) {
    const accountId = event.target.value;
    this.setState(() => ({ accountId }));
  }

  changeAmount(event) {
    const amount = event.target.value;
    this.setState(() => ({ amount }));
  }

  render() {
    const { accountId, amount } = this.state;
    const { data: { accounts }, mutate } = this.props;

    if(!accounts) {
      return <div>No accounts</div>
    }

    return (
      <div>
        <h1>Add a new transaction</h1>
        <AccountSelection
          onChange={this.changeAccountId}
          accounts={accounts}
          value={accountId}
        />
        <input onChange={this.changeAmount} value={amount} />
        <button
          type="submit"
          disabled={!accountId}
          onClick={
            () => {
              const variables = { accountId, amount };
              mutate({ variables }).then(console.log).catch(console.error);
            }
          }>
          Create
        </button>
      </div>
    )
  }

}

TransactionInput.propTypes = {
  data: accountsQueryPropType
};

const addTransactionMutation = gql`
  mutation AddTransaction($accountId: String, $amount: Int) {
    addTransaction(input: { accountId: $accountId, amount: $amount }) {
      id
    }
  }
`;
const getAccountsQuery = gql`
  query {
    accounts {
      id
    }
  }
`;

export const TransactionInputWithMutation = compose(
  graphql(getAccountsQuery),
  graphql(addTransactionMutation)
)(TransactionInput);
