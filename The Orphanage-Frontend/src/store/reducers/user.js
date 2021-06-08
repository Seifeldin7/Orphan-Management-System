import * as actionTypes from "../types/user";

import { updateObject } from "../utility";

const initialState = {
  users: [],
  currentUser: {},
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

const updateUserFail = (state, action) => {
  return updateObject(state, { showFailureAlert: true });
};

const updateUserSuccess = (state, action) => {
  let newUser = {...state.currentUser};
  newUser["phone"] = action.info.phone;
  newUser["name"] = action.info.name;
  newUser["national_id"] = action.info.national_id;
  newUser["email"] = action.info.email;
  return updateObject(state, {
    currentUser: newUser,
    showSuccessAlert: true,
    loading: false,
  });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.DELETE_USER_FAIL:
      return deleteUserFail(state, action);
    case actionTypes.DELETE_USER_SUCCESS:
      return deleteUserSuccess(state, action);
    case actionTypes.UPDATE_USER_FAIL:
      return updateUserFail(state, action);
    case actionTypes.UPDATE_USER_SUCCESS:
      return updateUserSuccess(state, action);
    case actionTypes.FETCH_USERS:
      return fetchUsers(state, action);
    default:
      return state;
  }
};

export default reducer;
