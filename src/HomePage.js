import React from 'react';
import { connect } from 'react-redux';

const HomePage = props => {
  return <div>{props.isLoggedIn ? <div>welcome</div> : <div>wtf?</div>}</div>;
};

export default connect(
  state => ({
    isLoggedIn: state.isLoggedIn,
  }),
  null,
)(HomePage);
