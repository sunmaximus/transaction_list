import { connect } from 'react-redux';
import LoginComponent from '../components/LoginComponent';

import { login } from '../../auth/authActions';

const mapStateToProps = ({ auth }) => {
  return { auth };
}

const mapDispatchToProps = (dispatch) => {
  return {
    login: (data, callBack) => dispatch(login(data, callBack))
  } 
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginComponent);