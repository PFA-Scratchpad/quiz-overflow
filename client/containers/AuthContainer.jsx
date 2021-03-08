import React, { Component } from 'react';
import { connect } from 'react-redux';

import Login from '../components/Login';
import Signup from '../components/Signup';

const mapStateToProps = state => ({
  showSignup: state.auth.showSignup,
});

const mapDispatchToProps = dispatch => ({
  handleLogin: e => {
    e.preventDefault();
    e.persist();
    dispatch();
  },
  handleSignup: e => {
    e.preventDefault();
    e.persist();
    dispatch();
  },
  goToLogin: e => {
    e.preventDefault();
    e.persist();
    dispatch();
  },
  goToSignup: e => {
    e.preventDefault();
    e.persist();
    dispatch();
  },
});

class AuthContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>{this.props.state.auth.showSignup ? <Signup /> : <Login />}</div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AuthContainer);
