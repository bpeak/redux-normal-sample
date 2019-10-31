import React from 'react';
import { connect } from 'react-redux';
import * as actionCreators from './redux/actionCreators';

const TestPage = props => {
  return (
    <div>
      <div>{props.isLoggedIn ? 'ok' : 'no'}</div>
      <button
        onClick={() => {
          props.login({ name: 'kihyun', age: 27 });
        }}
      >
        login
      </button>
    </div>
  );
};

export default connect(
  state => ({
    isLoggedIn: state.isLoggedIn,
  }),
  dispatch => ({
    login: ({ name, age }) => {
      dispatch(actionCreators.login({ name, age }));
    },
  }),
)(TestPage);
