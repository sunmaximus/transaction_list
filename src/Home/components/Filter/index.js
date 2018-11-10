import React, { Component } from 'react'
import { Header, Checkbox } from 'semantic-ui-react'

import './filter.scss';

class Filter extends Component {

  filterCheck(filterType, filterName) {
    const { filterAccountName, filterTransaction } = this.props;

    if (filterType === 'account') {
      filterAccountName(filterName.toLowerCase())
    } else if (filterType === 'transaction') {
      filterTransaction(filterName.toLowerCase())
    }
  }

  renderCheckBoxes = (boxesObject, filterType) => {
    return Object.keys(boxesObject).map(box => 
      <Checkbox
        className='filter__check-box'
        key={box}
        label={boxesObject[box]}
        onClick={() => this.filterCheck(filterType, boxesObject[box])}
      />
    )
  }

  render() {
    const accountName = {
      savingAccount: 'Savings Account',
      checkingAccount: 'Checking Account',
      autoLoanAccount: 'Auto Loan Account',
      creditCardAccount: 'Credit Card Account',
      investmentAccount: 'Investment Account',
      personalLoanAccount: 'Personal Loan Account',
      moneyMarketAccount: 'Money Market Account',
      homeLoanAccount: 'Home Loan Account',
    }

    const transactionType = {
      deposit: 'Deposit',
      withdrawal: 'WithDrawal',
      invoice: 'Invoice',
      payment: 'Payment',
    }

    return (
      <div className='filter__container'>
        <Header as='h3'>Filter</Header>
        <div className='filter__account-name'>
          <Header as='h3'>Account Name</Header>
          {this.renderCheckBoxes(accountName, 'account')}
        </div>
        <div className='filter__transaction-type'>
        <Header as='h3'>Transaction Type</Header>
          {this.renderCheckBoxes(transactionType, 'transaction')}
        </div>
      </div>
    );
  }
}

export default Filter;