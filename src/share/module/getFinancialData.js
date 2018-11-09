import axios from 'axios';
import _ from 'lodash';

export const FETCH_FINANCIAL_DATA = 'FETCH_FINANCIAL_DATA';
export const FETCH_FINANCIAL_DATA_RECEIVED = 'FETCH_FINANCIAL_DATA_RECEIVED';
export const FETCH_FINANCIAL_DATA_ERROR = 'FETCH_FINANCIAL_DATA_ERROR';

export const getFinancialData = (dispatch) => {
  dispatch && dispatch({ type: FETCH_FINANCIAL_DATA });
  return dispatch => {
    let token = localStorage.jwtToken
    axios.get('http://localhost:5000/api/get/data', { token })
      .then(response => {
        dispatch({ type: FETCH_FINANCIAL_DATA_RECEIVED, transactions: response.data.transactions })
      })
      .catch(error => {
        dispatch({ type: FETCH_FINANCIAL_DATA_ERROR, error });
      });
  }
}

const initialState = {
  loading: false,
  error: false,
  transactions: [],
  transactionsLookUp: {}
}

export default function financialDataReducer(state=initialState, action) {
  switch(action.type) {
    case FETCH_FINANCIAL_DATA:
      return {...state, loading: true, error: false };
    case FETCH_FINANCIAL_DATA_RECEIVED:
      return {
        ...state, 
        loading: false,
        error: false,
        transactions: action.transactions,
        transactionsLookUp: _.keyBy(action.transactions, 'account')
      };
    case FETCH_FINANCIAL_DATA_ERROR:
      return {...state, loading: false, error: true };
    default:
      return state;
  }
}