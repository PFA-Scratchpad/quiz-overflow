import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/authActions';

import Login from '../components/Login';
import Signup from '../components/Signup';

const mapStateToProps = state => ({
  showSignup: state.auth.showSignup,
});

const mapDispatchToProps = dispatch => ({
  handleLogin: e => {
    e.preventDefault();
    e.persist();
    dispatch(
      actions.postLogin({
        username: e.target.children.username.value,
        password: e.target.children.password.value,
      })
    );
  },
  handleSignup: e => {
    e.preventDefault();
    e.persist();
    dispatch(
      actions.postSignup({
        username: e.target.children.username.value,
        password: e.target.children.password.value,
      })
    );
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
