import React, { Component } from "react";
import "./Navbar.css";
import { Link, withRouter } from "react-router-dom";
import { BeforeLogin } from "./BeforeLogin/BeforeLogin";
import { AfterLogin } from "./AfterLogin/AfterLogin";
import { config } from "./../../utils/auth";
import { base } from "./../../config/environment";
import logoIcon from "../../assets/logo.png";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: this.props.isLoggedIn,
    };
  }

  handleClickOnSearch = () => {
    this.props.history.replace(`/`);
  };

  handleEnter = (event) => {
    if (event.key === "Enter") {
      console.log(event.target.value);
    }
  };
  render() {
    return (
      <div>
        <nav
          className="navbar navbar-expand-lg  fixed-top oud-nav"
          data-testid="home-nav"
        >
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            data-testid="toggle-btn"
          >
            <span className="navbar-toggler-icon toggler">
              <i
                className="fas fa-bars"
                style={{ color: "#fff", fontSsize: 28 }}
              ></i>
            </span>
          </button>
          <div className="collapse navbar-collapse">
            <Link to="/" className="upgrade">
              <ul className="navbar-nav mr-auto home">
                <img
                  src={logoIcon}
                  width="60"
                  height="60"
                  alt="OMS"
                  className="mr-2"
                />
                <span className="navbar-nav ml-auto">Home</span>
              </ul>
            </Link>
            {this.state.isLoggedIn ? (
              <input
                type="search"
                className="search-input empty"
                id="iconified"
                ref={(input) => {
                  this.nameInput = input;
                }}
                placeholder="&#xF002; Search for Organizations"
                aria-label="Search"
                onClick={() => this.handleClickOnSearch()}
                onChange={this.props.handleInput}
                data-testid="search-input"
                value={this.props.value}
                autoComplete="on"
                onKeyUp={this.props.onKeyUp}
                onKeyDown={(event) => this.handleEnter(event)}
              />
            ) : null}
          </div>
          <div
            className="collapse navbar-collapse login-signup"
            id="navbarSupportedContent"
            data-testid="right-part"
          >
            <ul className="navbar-nav mr-auto"></ul>
            <ul className="navbar-nav mr-auto"></ul>
            {this.state.isLoggedIn ? (
              <React.Fragment>
                <input
                  type="search"
                  className="oud-btn my-2 my-sm-0 mr-3 search-sm"
                  id="iconified"
                  ref={(input) => {
                    this.nameInput = input;
                  }}
                  placeholder="&#xF002; Search for Organizations"
                  aria-label="Search"
                  onClick={() => this.handleClickOnSearch()}
                  onChange={this.props.handleInput}
                  data-testid="search-input"
                  value={this.props.value}
                  autoComplete="on"
                  onKeyUp={this.props.onKeyUp}
                  onKeyDown={(event) => this.handleEnter(event)}
                />
                <AfterLogin data-testid="right-after-login" />
              </React.Fragment>
            ) : (
              <BeforeLogin data-testid="right-before-login" />
            )}
          </div>
        </nav>
      </div>
    );
  }
}

export default withRouter(Navbar);
