import React, { Component } from 'react';

class Login extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="login">
        <form id="loginForm" onSubmit={this.props.handleLogin}>
          <input className="username" name="username" placeholder="Username" type="text" />
          <input className="password" name="password" placeholder="Password" type="password" />
          <input className="submit" type="submit" name="submit" value="Sign in" />
        </form>
        <a className="alternateOption" onClick={this.props.goToSignup} name="#">
          Need an account?
        </a>
      </div>
    );
  }
}

export default Login;
