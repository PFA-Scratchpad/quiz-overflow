import React, { Component } from 'react';

class Signup extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const errorMsg = <span className="error">{this.props.message}</span>;
    return (
      <div id="signup">
        <form id="signupForm" onSubmit={this.props.handleSignup}>
          <input className="username" name="username" placeholder="Username" type="text" />
          <input className="password" name="password" placeholder="Password" type="password" />
          <input className="submit" type="submit" value="Sign up" />
        </form>
        <a onClick={this.props.goToLogin}>Have an account already?</a>
        {this.props.loginFailure ? errorMsg : ''}
      </div>
    );
  }
}

export default Signup;
