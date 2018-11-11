import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Button, Header, Divider } from 'semantic-ui-react';
import _ from 'lodash';

import { getFinancialData } from '../share/module/getFinancialData';
import Loader from '../share/components/Loader';
import NavBar from '../share/components/NavBar';

import './transaction-detail.scss';

class TransactionDetail extends Component {
  componentDidMount() {
    const { transactionsLookUp, getFinancialData } = this.props;
    _.isEmpty(transactionsLookUp) && getFinancialData();
  }

  render () {
    const transaction = this.props.transactionsLookUp[this.props.match.params.account];
    if (this.props.loading || !transaction) return <Loader />

    return (
      <div className='transaction-detail__container'>
        <NavBar background={false} />
        <div className='transaction-detail__group'>
          <Header as='h1'>Transaction {this.props.match.params.account}</Header>
          <Divider />
          <div className='transaction-detail__info'><strong>Account No.:</strong> {transaction.account}</div>
          <div className='transaction-detail__info'><strong>Account Name:</strong> {transaction.accountName}</div>
          <div className='transaction-detail__info'><strong>Currency Code:</strong> {transaction.currencyCode}</div>
          <div className='transaction-detail__info'><strong>Amount:</strong> {transaction.amount}</div>
          <div className='transaction-detail__info'><strong>Transaction Type:</strong> {transaction.transactionType}</div>          
          <Link to='/'><Button className='transaction-detail__button'>Go Back</Button></Link>
        </div>
      </div>)    
}
};


const mapStateToProps = ({ auth, financialData }) => ({ user: auth.user, transactionsLookUp: financialData.transactionsLookUp });

const mapDispatchToProps = (dispatch) => {
  return {
    getFinancialData: () => dispatch(getFinancialData(dispatch)),
  }
}

TransactionDetail.propTypes = {
  getFinancialData: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
  transactionsLookUp: PropTypes.object,
  match: PropTypes.object.isRequired,
}

export default connect(mapStateToProps, mapDispatchToProps)(TransactionDetail);