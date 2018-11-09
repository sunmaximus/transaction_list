import React, { Component } from 'react';
import { Button, Form } from 'semantic-ui-react'
import { Redirect } from "react-router-dom";
import PropTypes from 'prop-types';

import '../style/login.scss';

class LoginComponent extends Component {
  state = { redirectToReferrer: false, username: '', password: '' };
  login = () => {
    const { username, password } = this.state;
    // very simple form valitation. Change this base on the business logic
    this.setState({ userNameError: !username, passwordError: !password, });
    username && password && this.props.login(
      { username, password },
      ({ redirectToReferrer, error }) => this.setState({ redirectToReferrer, error })
    );
  };

  render() {
    let { from } = this.props.location.state || { from: { pathname: "/" } };
    let { redirectToReferrer, username, password, error, userNameError, passwordError } = this.state;
    if (redirectToReferrer) return <Redirect to={from} />;

    return (
      <div className='login__container'>        
        <h1>login form</h1>
        <div className='login__card'>
          <Form className='login__form'>
            <Form.Field>
              <label>username</label>
              <input
                value={username}
                placeholder='username *'
                onChange={
                  (event) => this.setState({ 
                    username: event.target.value,
                    userNameError: !event.target.value
                  })}
                className={`${userNameError && 'login__input-error'}`}
              />
            </Form.Field>
            <Form.Field>
              <label>password</label>
              <input
                value={password}
                type="password"
                placeholder='password *'
                onChange={(event) => this.setState({
                  password: event.target.value,
                  passwordError: !event.target.value
                })}
                className={`${passwordError && 'login__input-error'}`}
              />
            </Form.Field>
            <Button type='submit' onClick={this.login} className='login__button'>Login</Button>
            {error && <div className='login__error'>login fail</div>}
          </Form>
        </div>
      </div>
    );
  }
}

LoginComponent.propTypes = {
  login: PropTypes.func.isRequired,
  location: PropTypes.object,
};


export default LoginComponent;
