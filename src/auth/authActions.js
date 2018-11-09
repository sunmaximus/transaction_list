
import axios from 'axios';
import setAuthorizationToken from '../utils/setAuthorizationToken';
import jwtDecode from 'jwt-decode';
import { SET_CURRENT_USER } from './types';

export function setCurrentUser(user) {
  return {
    type: SET_CURRENT_USER,
    user
  };
}

export function logout(callBack) {
  return dispatch => {
    localStorage.removeItem('jwtToken');
    setAuthorizationToken(false);
    dispatch(setCurrentUser({}));
    callBack && callBack();
  }
}

export function login(data, callBack) {
  return dispatch => {
    return axios.post('http://localhost:5000/api/login', data)
      .then(res => {
        const token = res.data.token;
        localStorage.setItem('jwtToken', token);
        setAuthorizationToken(token);
        dispatch(setCurrentUser(jwtDecode(token)));
        callBack && callBack({ redirectToReferrer: true, error: false });
      }).catch(function (error) {
        console.log(error);
        callBack && callBack({ redirectToReferrer: false, error: true });
      });
  }

}