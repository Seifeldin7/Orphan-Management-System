import React, { Component } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../../../store/actions/auth";

export const AfterLogin = () => {
  const dispatch = useDispatch();
  return (
    <form className="form-inline my-2 my-lg-0" data-testid="after-login">
      <Link
        to="/login"
        className="signup-signin-link upgrade"
        data-testid="upgrade-link"
      >
        <button
          className="btn oud-btn my-2 my-sm-0 mr-3 upgrade"
          data-testid="upgrade-btn"
          onClick={() => dispatch(logout())}
        >
          Logout
        </button>
      </Link>
    </form>
  );
};

export default AfterLogin;
