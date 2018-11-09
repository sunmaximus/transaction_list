import React, { Component } from 'react'
import { Header, Checkbox } from 'semantic-ui-react'

import './filter.scss';

class Filter extends Component {

  renderCheckBoxes = (boxesObject) => {
    return Object.keys(boxesObject).map(box => 
      <Checkbox
        className='filter__check-box'
        key={box}
        label={boxesObject[box]}
      />
    )
  }

  render() {
    const accountName = {
      savingAccount: 'Saving Account',
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
          {this.renderCheckBoxes(accountName)}
        </div>
        <div className='filter__transaction-type'>
        <Header as='h3'>Transaction Type</Header>
          {this.renderCheckBoxes(transactionType)}
        </div>
      </div>
    );
  }
}

export default Filter;