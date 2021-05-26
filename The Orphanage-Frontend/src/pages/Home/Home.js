import React from "react";
import "./Home.css";
import Sidebar from "../../components/Sidebar/Sidebar";
import { base } from "./../../config/environment";
import axios from "axios";
import { config, isLoggedIn } from "./../../utils/auth";
import MainContent from "../Donate/Donate";
import { Route, Switch, useLocation, BrowserRouter as Router, useRouteMatch } from "react-router-dom";

const Home = () => {
  const { path, url } = useRouteMatch();
  return (
    <div>
      <Sidebar
        data-testid="sidebar"
      />
      {/* <DonationHistory /> */}
    </div>
  );

}

export default Home;
