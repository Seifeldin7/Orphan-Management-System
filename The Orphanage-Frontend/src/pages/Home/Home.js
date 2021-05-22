import React, { Component } from "react";
import "./Home.css";
import Sidebar from "../../components/Sidebar/Sidebar";
import Navbar from "../../components/Navbar/Navbar";
import { base } from "./../../config/environment";
import axios from "axios";
import { config, isLoggedIn } from "./../../utils/auth";
import MainContent from "../../components/MainContent/MainContent";

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
        {/* <Navbar isLoggedIn={isLoggedIn()}
          data-testid="navbar"
        /> */}
        <MainContent />
      </div>
    );
  }
}

export default Home;
