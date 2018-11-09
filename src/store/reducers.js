import { combineReducers } from 'redux'

import authReducer from './authReducer';
import financialDataReducer from '../share/module/getFinancialData';

const rootReducer = combineReducers({
  auth: authReducer,
  financialData: financialDataReducer,
});
  
export default rootReducer;