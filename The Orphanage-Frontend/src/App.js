import React, { Component } from "react";

import {
  BrowserRouter as Router,
  Route,
  Switch,
  useParams
} from "react-router-dom";
import { base } from "./config/environment";
import Home from "./pages/Home/Home";
import { createBrowserHistory } from "history";
import firebase from "./firebase";
import axios from "axios";
import { config } from "./utils/auth";
import "./App.css";
import Profile from "./components/Profile/Profile";
import DonationHistory from "./components/DonationsHistory/DonationHistory";

let history = createBrowserHistory();

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      notificationToken: ""
    };
  }

  render() {
    return (
      <Router>
        <div
          className="App"
        >
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            {/* <Route exact path="/search">
              <Search />
            </Route>
            <Route exact path="/genre/:genreName">
              <SeeAll />
            </Route> */}
            <Route exact path="/profile">
              <Profile />
            </Route>
            <Route exact path="/history">
              <DonationHistory />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
