import React, { Component } from "react";

import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";
import { base } from "../config/environment";
import Home from "../pages/Home/Home";
import { isLoggedIn } from "../utils/auth";

import Navbar from "../components/Navbar/Navbar";
import Profile from "../pages/Profile/Profile";
import DonationHistory from "../pages/DonationsHistory/DonationHistory";
import Donate from "../pages/Donate/Donate";

import { Provider } from "react-redux";
import { ConfigureStore } from "../store/store";
import OrganizationDetails from "../pages/OrganizationDetails/OrganizationDetails";
import Items from "../pages/Items/Items";
import Users from "../pages/Users/Users";
import Footer from "../components/Footer/Footer";
import Register from "../components/Register/Register";
import Login from "../components/Login/Login";
import { GuardProvider, GuardedRoute } from "react-router-guards";
import { useSelector } from "react-redux";

const store = ConfigureStore();
const requireLogin = (to, from, next) => {
  if (to.meta.auth) {
    if (isLoggedIn()) {
      next();
    }
    next.redirect("/login");
  } else {
    next();
  }
};

function MainRouter() {
  const token = useSelector((state) => state.auth.token);
  return (
    <Router>
        <div className="App">
          <Navbar isLoggedIn={isLoggedIn() || (console.log(token))} data-testid="navbar" />
          <GuardProvider guards={[requireLogin]}>
            <Switch>
              <GuardedRoute
                exact
                path="/"
                component={Home}
                meta={{ auth: true }}
              />
              <GuardedRoute
                exact
                path="/profile"
                component={Profile}
                meta={{ auth: true }}
              />
              <GuardedRoute
                exact
                path="/history"
                component={DonationHistory}
                meta={{ auth: true }}
              />
              <GuardedRoute
                exact
                path="/donate"
                component={Donate}
                meta={{ auth: true }}
              />
              <GuardedRoute
                exact
                path="/organization"
                component={OrganizationDetails}
                meta={{ auth: true }}
              />
              <GuardedRoute
                exact
                path="/items"
                component={Items}
                meta={{ auth: true }}
              />
              <GuardedRoute
                exact
                path="/users"
                component={Users}
                meta={{ auth: true }}
              />
     
              <GuardedRoute exact path="/signup" component={Register} />
              <GuardedRoute exact path="/login" component={Login} />
            </Switch>
          </GuardProvider>
          <Footer />
        </div>
      </Router>
  );
}

export default MainRouter;
