import React, { Component } from "react";
import "./Navbar.css";
import { withRouter } from "react-router-dom";
import { BeforeLogin } from "./BeforeLogin/BeforeLogin"
import { AfterLogin } from "./AfterLogin/AfterLogin"
import { config } from "./../../utils/auth"
import { base } from "./../../config/environment"
import axios from "axios"

class Navbar extends Component {

  constructor(props) {
    super(props)
    this.state = {

      isLoggedIn: this.props.isLoggedIn,
      userInfo: {},
      _id: "",
      username: "",
      email: "",
      displayName: "",
      credit: 0,
      images: [],
      timeOut: 0
    }
  }


  handleClickOnSearch = (newRoute) => {
    this.props.history.replace(`/${newRoute}`);
  }

  handleStoringUserInfo = ({ _id, username, email, displayName, credit, images }) => {
    const userInfo = { _id, username, email, displayName, credit, images };
    this.setState({ userInfo, _id, username, email, displayName, credit, images });
  }
  /**
   * A function to handle going back to last route we were used
   * 
   * @function
   * 
   * @returns {void} returns nothing, it just handle changing the routes to last one back
   * 
   */
  handleGoBack = () => {
    this.props.history.goBack();
  }

  /**
   * A function to handle going forward to the last route we were used
   * 
   * @function
   * 
   * @returns {void } returns nothing, it just handle changing the routes to last one forward
   */
  handleGoForward = () => {
    this.props.history.goForward();
  }


  render() {
    return (
      <div>
        <nav
          className="navbar navbar-expand-lg navbar-light bg-light fixed-top oud-nav"
          data-testid="home-nav"
        >
          <form
            className="form-inline"
            onSubmit={this.props.handleSubmit}
            data-testid="left-part"
          >
            <div
              className="back-forward nav-back-forward"
              data-testid="nav-back-forward"
            >
              <div
                className="navbar-brand"
                onClick={this.handleGoBack}
                data-testid="back-switch"
              >
                <i className="fa fa-angle-left fa-lg left-arrow"
                  data-testid="left-arrow-icon"
                ></i>
              </div>
              <div
                className="navbar-brand"
                onClick={this.handleGoForward}
                data-testid="forward-switch">
                <i
                  className="fa fa-angle-right fa-lg right-arrow"
                  data-testid="right-arrow-icon"
                ></i>
              </div>
            </div>
            <input
              type="search"
              className="search-input empty"
              id="iconified"
              ref={(input) => { this.nameInput = input; }}
              placeholder="&#xF002; Search for Artists, Songs"
              aria-label="Search"
              onClick={() => this.handleClickOnSearch('search')}
              onChange={this.props.handleInput}
              data-testid="search-input"
              value={this.props.value}
              autoComplete="off"
              onKeyUp={this.props.onKeyUp}
              onKeyDown={this.props.onKeyDown}
            />
          </form>
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
            <span className="navbar-toggler-icon toggler"></span>
          </button>

          <div
            className="collapse navbar-collapse login-signup"
            id="navbarSupportedContent"
            data-testid="right-part"
          >
            <ul className="navbar-nav mr-auto"></ul>
            <ul className="navbar-nav mr-auto"></ul>
            {
              (this.state.isLoggedIn) ?
                <AfterLogin data-testid="right-after-login" /> :
                <BeforeLogin data-testid="right-before-login" />
            }
          </div>
        </nav>
      </div >
    );
  }
}


export default withRouter(Navbar);

