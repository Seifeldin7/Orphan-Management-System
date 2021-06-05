import * as actionTypes from "../types/user";

import { updateObject } from "../utility";

const initialState = {
  users: [],
  showFailureAlert: false,
  showSuccessAlert: false,
};

const deleteUserFail = (state, action) => {
  return updateObject(state, { showFailureAlert: true });
};

const deleteUserSuccess = (state, action) => {
  let fliteredUsers = state.users.filter((user) => user.id !== action.id);
  return updateObject(state, {
    users: fliteredUsers,
    showSuccessAlert: true,
  });
};

const fetchUsers = (state, action) => {
  return updateObject(state, { users: action.usersData });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.DELETE_USER_FAIL:
      return deleteUserFail(state, action);
    case actionTypes.DELETE_USER_SUCCESS:
      return deleteUserSuccess(state, action);
    case actionTypes.FETCH_USERS:
      return fetchUsers(state, action);
    default:
      return state;
  }
};

export default reducer;
