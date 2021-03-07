import { Component } from 'react';
import { connect } from 'react-redux';

import Signin from '../components/Signin';
import Signup from '../components/Signup';

const mapStateToProps = state => ({
  signedIn: state.auth.signedIn,
  showSignup: state.auth.showSignup,
});

const mapDispatchToProps = dispatch => ({
  handleSignin: e => {},
  handleSignup: e => {},
  goToSignin: () => {},
  goToSignup: () => {},
});

class AuthContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>{this.props.state.auth.showSignup ? <Signup /> : <Signin />}</div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AuthContainer);
