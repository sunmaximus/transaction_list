import React, { Component } from 'react';
import { Icon, Menu, Table } from 'semantic-ui-react'
import _ from 'lodash';

import Filter from '../Filter';
import './transaction.scss';

class Transactions extends Component {
  constructor(props) {
    super(props);

    this.state = {
      page: 1,
      prevPage: 0,
      currentPage: 25,
      nextPage: 50,
      filterAccountName: [],
      filterTransactionType: [],
    }
    this.showPreviousPage = this.showPreviousPage.bind(this);
    this.showNextPage = this.showNextPage.bind(this);
  }

  showPreviousPage = () => {
    if (this.state.page === 1) return;
    this.setState(state => ({
      page: state.page - 1,
      prevPage: state.prevPage - 25,
      currentPage: state.currentPage - 25,
      nextPage: state.currentPage,
    }))
  }

  showNextPage = () => {
    if (
      this.state.currentPage === this.props.transactions.length ||
      this.state.currentPage > this.props.transactions.length
    ) return;

    this.setState(state => ({
      page: state.page + 1,
      nextPage: state.nextPage + 25,
      currentPage: state.currentPage + 25,
      prevPage: state.currentPage,
    }))
  }

  filterAccountName(accountName) {
    return this.setState(prevState => {
      return {
        filterAccountName:
          prevState.filterAccountName.includes(accountName) ?
            prevState.filterAccountName.filter(account => account !== accountName) :
            [...prevState.filterAccountName, accountName],
    }})
  }

  filterTransaction(transactionType) {
    return this.setState(prevState => {
      return {
        filterTransactionType:
          prevState.filterTransactionType.includes(transactionType) ?
            prevState.filterTransactionType.filter(account => account !== transactionType) :
            [...prevState.filterTransactionType, transactionType],
    }})
  }


  renderTransactions() {
    const { prevPage, currentPage, filterAccountName, filterTransactionType } = this.state;

    let transactions = this.props.transactions
      .filter(customer => filterAccountName.length > 0 ? filterAccountName.includes(customer.accountName.toLowerCase()) : true)
      .filter(customer => filterTransactionType.length > 0 ? filterTransactionType.includes(customer.transactionType.toLowerCase()) : true)

    // Account No. | Account Name | Currency | Amount | Transaction Type
    return transactions.slice(prevPage, currentPage).map((customer, index) => {
      return (
        <Table.Row key={customer.account}>
          {/* <Table.Cell>{prevPage + index}</Table.Cell> */}
          <Table.Cell>{customer.account}</Table.Cell>
          <Table.Cell>{`${customer.accountName}`}</Table.Cell>
          <Table.Cell>{customer.currencySymbol}</Table.Cell>
          <Table.Cell>{customer.amount}</Table.Cell>
          <Table.Cell>{customer.transactionType}</Table.Cell>
        </Table.Row>)
    });
  }

  // Account No. | Account Name | Currency | Amount | Transaction Type
  render() {
    return (
      <div className='transaction__container'>
        
        <div className='transaction__menu'>
          <Filter
            filterAccountName={this.filterAccountName.bind(this)}
            filterTransaction={this.filterTransaction.bind(this)}
          />
        </div>

        <div className='transaction__main'>
          <Table celled>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>Account No.</Table.HeaderCell>
                <Table.HeaderCell>Account Name</Table.HeaderCell>
                <Table.HeaderCell>Currency</Table.HeaderCell>
                <Table.HeaderCell>Amount</Table.HeaderCell>
                <Table.HeaderCell>Transaction Type</Table.HeaderCell>
              </Table.Row>
            </Table.Header>
      
            <Table.Body>
              {this.renderTransactions()}
            </Table.Body>
        
            <Table.Footer>
              <Table.Row>
                <Table.HeaderCell colSpan='5'>
                  <Menu floated='right' pagination>
                    <Menu.Item as='a' icon onClick={this.showPreviousPage}>
                      <Icon name='chevron left' />
                    </Menu.Item>
                    <Menu.Item as='a'>{this.state.page}</Menu.Item>
                    <Menu.Item as='a' icon onClick={this.showNextPage}>
                      <Icon name='chevron right' />
                    </Menu.Item>
                  </Menu>
                </Table.HeaderCell>
              </Table.Row>
            </Table.Footer>
          </Table> 
        </div>
       


       
      </div>
);    
  }
}

export default Transactions;