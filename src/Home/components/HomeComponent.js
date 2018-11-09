import React, { Component } from 'react';

import UserComponent from './UserComponent';
import AdminComponent from './AdminComponent';
import PropTypes from 'prop-types';

import '../styles/home.scss'
class HomeComponent extends Component {
  render() {
    if (this.props.user.authenticationLevel === 'user') {
      return <UserComponent user={this.props.user} />
    }

    return <AdminComponent user={this.props.user} />
  }
}

HomeComponent.propTypes = {
  user: PropTypes.object.isRequired
};

export default HomeComponent;