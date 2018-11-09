import React, { Component } from "react";
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

export default function (ComposedComponent) {
  class PrivateRouter extends Component {
    componentWillMount() {
      if (!this.props.isAuthenticated) {
        this.props.history.push('/login');
      }
    }

    componentWillUpdate(nextProps) {
      if (!nextProps.isAuthenticated) {
        this.props.history.push('/login');
      }
    }

    render() {
      if (!this.props.isAuthenticated) {
        return (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: this.props.location }
            }}
          />          
        )
      }
      return <ComposedComponent {...this.props} />;
    }
  }

  function mapStateToProps(state) {
    return { isAuthenticated: state.auth.isAuthenticated };
  }

  return connect(mapStateToProps)(PrivateRouter);
}