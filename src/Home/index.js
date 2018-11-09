import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import NavBar from '../share/components/NavBar';

import Loader from '../share/components/Loader';

import Transaction from './components/Transactions';
import { getFinancialData } from '../share/module/getFinancialData';

import './home.scss';

class Home extends Component {
  componentDidMount() {
    const { financialData, getFinancialData } = this.props;
    financialData.transactions.length === 0 && getFinancialData();
  }

  render() {
    const { financialData } = this.props;
    console.log(financialData.transactions.length)

    if(financialData.loading) return <Loader />
    // Filter |     Account No. | Account Name | Currency | Amount | Transaction Type
    return (
      <div>
        <NavBar hasBackground={false} />
        <div className='home__container'>
          <div className='home__filter-section'></div>
          <div className='home__transactions-section'>
            <Transaction
              transactions={financialData.transactions}
            />
          </div>
        </div>        
      </div>

    );
  }
}

Home.propTypes = {
  user: PropTypes.object.isRequired,
  getFinancialData: PropTypes.func.isRequired,
  financialData: PropTypes.object.isRequired,
};

const mapStateToProps = ({ auth, financialData }) => ({ user: auth.user, financialData });

const mapDistpatchToProps = (dispatch) => {
  return {
    getFinancialData: () => dispatch(getFinancialData(dispatch))
  }
}

export default connect(mapStateToProps, mapDistpatchToProps)(Home);
