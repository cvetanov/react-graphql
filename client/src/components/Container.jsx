import React, { Component } from 'react';
import { AccountWithData } from './Account';
import { AccountsWithData } from './Accounts';

export default class Container extends Component {

  constructor(props) {
    super(props);
    this.state = { accountId: '' };
    this.changeAccountId = this.changeAccountId.bind(this);
  }

  changeAccountId(event) {
    const accountId = event.target.value;
    this.setState(() => ({ accountId }));
  }

  render() {
    const { accountId } = this.state;
    return (
      <div>
        <AccountsWithData onChange={this.changeAccountId} />
        <br />
        <AccountWithData accountId={accountId} />
      </div>
    )
  }
}
