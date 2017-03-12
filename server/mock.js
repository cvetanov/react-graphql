import _ from 'lodash';

export const accounts = [
  {
    id: 'account-1',
    balance: 10000,
    transactions: [
      {
        id: 'transaction-1-1',
        amount: 2000
      },
      {
        id: 'transaction-1-2',
        amount: 2800
      }
    ]
  },
  {
    id: 'account-2',
    balance: 17000,
    transactions: [
      {
        id: 'transaction-2-1',
        amount: 8400
      },
      {
        id: 'transaction-2-2',
        amount: 5450
      }
    ]
  }
];

// mock data for debugging purposes
export const accountsMap = _.groupBy(accounts, 'id');
