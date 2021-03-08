import React, { Component } from 'react';

class Login extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="login">
        <form id="loginForm" onSubmit={this.props.handleLogin}>
          <input name="username" placeholder="Username" type="text" />
          <input name="password" placeholder="Password" type="password" />
          <input type="submit" name="submit" value="Sign in" />
        </form>
        <a onClick={this.props.goToSignup} name="#">
          Need an account?
        </a>
      </div>
    );
  }
}

export default Login;
