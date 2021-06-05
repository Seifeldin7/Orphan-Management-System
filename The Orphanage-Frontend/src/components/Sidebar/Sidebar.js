import React, { Component } from "react";
import "./Sidebar.css";
import charityIcon from "../../assets/orphanage.png";
import { Link } from "react-router-dom";
import {
  adminSidebarElements,
  donorSidebarElements,
  orphanSidebarElements,
  SidebarElement
} from "./SidebarElements";
import { getRole } from "./../../utils/auth";

class Sidebar extends Component {

  constructor(props) {
    super(props);

    this.state = {
      role: "admin"
    };

  }
  componentDidMount() {
    //this.setRole();
  }

  setRole = () => {
    getRole()
      .then(res => {
        this.setState({ role: res });
      })
      .catch(error => {
        console.log(error);
      });
  };

  renderSideBarElements = () => {
    let sidebarElement = null;
    if (this.state.role === "admin") {
      sidebarElement = adminSidebarElements;
    }
    else if (this.state.role === "orphan") {
      sidebarElement = orphanSidebarElements;
    }
    else if (this.state.role === "donor") {
      sidebarElement = donorSidebarElements;
    }
    return sidebarElement ? sidebarElement.map(({ route, iconClasses, name }, index) => {
      return (
        <SidebarElement
          route={route}
          iconClasses={iconClasses}
          name={name}
          key={index}
          data-testid="first-sidebar-element"
        />
      );
    }) : null;
  }

  render() {
    return (
      <div>
        <div className="vertical-nav" id="sidebar">
          <div className="py-4 px-3" data-testid="oud-logo-component">
            <Link to="/welcome" data-testid="oud-logo-link">
              <div className="media-body">
                <h2 className="mb-0">
                  <img
                    src={charityIcon}
                    width="100%"
                    height="100%"
                    alt="OMS"
                    data-testid="oud-logo-img"
                  />
                </h2>
              </div>
            </Link>
          </div>
          <ul
            className="nav flex-column mb-0 ml-2"
            data-testid="second-sidebar-elements"
          >
            {this.renderSideBarElements()}
          </ul>
        </div>
      </div>
    );
  }
}

export default Sidebar;
