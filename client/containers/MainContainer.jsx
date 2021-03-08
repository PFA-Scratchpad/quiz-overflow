import React from 'react';
import { connect } from 'react-redux';
import AuthContainer from './AuthContainer';

const mapStateToProps = state => ({
  loggedIn: state.auth.loggedIn,
});

const MainContainer = props => {
  const auth = props.loggedIn ? (
    'CARD CONTAINER TO RENDER HERE'
  ) : (
    <AuthContainer />
  );

  return auth;
};

export default connect(mapStateToProps)(MainContainer);
