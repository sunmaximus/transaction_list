import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import PropTypes from 'prop-types';

import Loader from '../../../share/components/Loader';
import { getFinancialData } from '../../../share/module/getFinancialData';

import './homepage.scss';

class HomePage extends Component {
  componentWillMount() {
    const { financialData, getFinancialData } = this.props;
    financialData.transactions.length === 0 && getFinancialData();
  }

  render() {
    const { financialData } = this.props;

    if(financialData.loading) return <Loader />

    return (
      <div className='home__container'>
        Test Home
      </div>
    );
  }
}

HomePage.propTypes = {
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

export default connect(mapStateToProps, mapDistpatchToProps)(HomePage);
