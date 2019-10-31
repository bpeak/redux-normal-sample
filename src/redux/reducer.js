import * as actionTypes from './actionTypes';

const initialState = {
  isLoggedIn: false,
  name: null,
  age: null,
};

const reducer = (state = initialState, action) => {
  if (action.type === actionTypes.LOGIN) {
    return {
      ...state,
      name: action.name,
      age: action.age,
      isLoggedIn: true,
    };
  } else if (action.type === actionTypes.LOGOUT) {
    return {
      ...state,
      name: null,
      age: null,
    };
  } else {
    return state;
  }
};

export default reducer;
