import React, { Component } from "react";

import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";
import { base } from "./config/environment";
import Home from "./pages/Home/Home";
import firebase from "./firebase";
import axios from "axios";
import { config } from "./utils/auth";
import "./App.css";

import Navbar from "./components/Navbar/Navbar";
import { stubTrue } from "lodash";
import Profile from "./pages/Profile/Profile";
import DonationHistory from "./pages/DonationsHistory/DonationHistory";
import Donate from "./pages/Donate/Donate";

import { Provider } from "react-redux";
import { ConfigureStore } from "./store/store";

const store = ConfigureStore();

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      notificationToken: ""
    };
  }

  render() {
    return (
      <Provider store={store}>
        <Router>
          <div
            className="App"
          >
            <Navbar isLoggedIn={true}
              data-testid="navbar"
            />
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route exact path="/profile">
                <Profile />
              </Route>
              <Route exact path="/history">
                <DonationHistory />
              </Route>
              <Route exact path="/donate">
                <Donate />
              </Route>
            </Switch>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
