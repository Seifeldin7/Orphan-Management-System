import React, { Component } from "react";
import { Link } from "react-router-dom";
import { baseUrl, prodUrl } from "./../../../config/environment";
import axios from "axios";
import { config } from "../../../utils/auth";

export class AfterLogin extends Component {
  constructor(props) {
    super(props);

    this.state = { privateSession: false };
  }

  componentDidMount() {
    axios
      .get("https://oud-zerobase.me/api/v1/me", config)
      .then(response => {
        this.setState({ privateSession: response.data.privateSession });
      })
      .catch(error => {
        console.log(error.response);
      });
  }
  handleLogOut = e => {
    localStorage.removeItem("accessToken");
  };

  handlePrivateSession = event => {
    axios
      .put(
        "https://oud-zerobase.me/api/v1/me/privateSession",
        { privateSession: !this.state.privateSession },
        config
      )
      .then(response => {
        console.log(response);
        window.location = window.location;
      })
      .catch(error => {
        console.log(error.response);
      });
  };
  render() {
    const userInformation = this.props.userInfo ? this.props.userInfo : null;
    const subPath = baseUrl;
    let profileImage =
      "https://oud-zerobase.me/api/uploads/users/default-Profile.svg",
      userId = "",
      displayName = "";
    if (userInformation) {
      profileImage =
        this.props.userInfo.images !== undefined
          ? subPath + this.props.userInfo.images[0]
          : "https://oud-zerobase.me/api/uploads/users/default-Profile.svg";
      userId = this.props.userInfo._id;
      displayName = this.props.userInfo.displayName;
    }
    return (
      <form className="form-inline my-2 my-lg-0" data-testid="after-login">
        <Link
          to="/"
          className="signup-signin-link upgrade"
          data-testid="upgrade-link"
        >
          <button
            className="btn oud-btn my-2 my-sm-0 mr-3 upgrade"
            type="submit"
            data-testid="upgrade-btn"
          >
            Logout
          </button>
        </Link>
      </form>
    );
  }
}

export default AfterLogin;
