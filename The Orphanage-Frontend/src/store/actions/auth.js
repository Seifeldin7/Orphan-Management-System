import * as Requester from "../../utils/requester";

import * as actionTypes from "../types/auth";

export const authStart = () => {
  return {
    type: actionTypes.AUTH_START,
  };
};

export const authSuccess = (token, userId) => {
  return {
    type: actionTypes.AUTH_SUCCESS,
    token: token,
    userId: userId,
  };
};

export const authFail = (error) => {
  alert("Authentication failed, please check your credentials and try again");
  return {
    type: actionTypes.AUTH_FAIL,
    error: error,
  };
};

export const logout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("userId");
  return {
    type: actionTypes.AUTH_LOGOUT,
  };
};

export const checkAuthTimeout = (expirationTime) => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(logout());
    }, expirationTime * 1000);
  };
};

export const auth = (authData, isSignup) => {
  return async (dispatch) => {
    try {
      dispatch(authStart());

      let url = "/register";
      if (!isSignup) {
        url = "/login";
      }
      const response = await Requester.postRequest(url, authData);
      if (response.data) {
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("userId", response.data.userId);
        dispatch(authSuccess(response.data.token, response.data.userId));
      }
    } catch (err) {
      dispatch(authFail(err.response.data.error));
    }
  };
};
