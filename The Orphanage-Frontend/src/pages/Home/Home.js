import React, { Component } from "react";
import "./Home.css";
import Sidebar from "../../components/Sidebar/Sidebar";
import Navbar from "../../components/Navbar/Navbar";
import { base } from "./../../config/environment";
import axios from "axios";
import { config, isLoggedIn } from "./../../utils/auth";
import MainContent from "../../components/MainContent/MainContent";
import Profile from "../../components/Profile/Profile";
import DonationHistory from "../../components/DonationsHistory/DonationHistory";

class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {

    };
  }


  render() {
    return (
      <div>
        <Sidebar
          data-testid="sidebar"
        />
        <Navbar isLoggedIn={isLoggedIn()}
          data-testid="navbar"
        />
        <DonationHistory />
      </div>
    );
  }
}

export default Home;
