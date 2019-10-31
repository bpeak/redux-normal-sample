import * as actionTypes from './actionTypes';

export const login = ({ name, age }) => {
  return {
    type: actionTypes.LOGIN,
    name,
    age,
  };
};

export const logout = () => {
  return {
    type: actionTypes.LOGOUT,
  };
};
