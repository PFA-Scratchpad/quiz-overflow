import React, { Component } from 'react';

class Login extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const errorMsg = <span className="error">{this.props.message}</span>;
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
        {this.props.loginFailure ? errorMsg : ''}
      </div>
    );
  }
}

export default Login;
