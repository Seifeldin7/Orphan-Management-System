import React from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";

const adminSidebarElements = [
  {
    route: "/users",
    iconClasses: "fa fa-user mr-3 icon-sz sidebar-icons",
    name: "Users"
  },
  {
    route: "/donations",
    iconClasses: "fas fa-clipboard-list mr-3 fa-lg sidebar-icons",
    name: "Donations"
  },
  {
    route: "/items",
    iconClasses: "fas fa-warehouse mr-3 fa-lg sidebar-icons",
    name: "items"
  },
];
const donorSidebarElements = [
  {
    route: "/",
    iconClasses: "fa fa-home mr-3  fa-lg sidebar-icons",
    name: "Home"
  },
  {
    route: "/donate",
    iconClasses: "fas fa-hand-holding-usd mr-3  fa-lg sidebar-icons",
    name: "Donate"
  },
  {
    route: "history",
    iconClasses: "fas fa-list mr-3  fa-lg sidebar-icons",
    name: "Donations History"
  },
  {
    route: "/profile",
    iconClasses: "fa fa-user mr-3 fa-lg sidebar-icons",
    name: "Profile"
  }
];

const orphanSidebarElements = [
  {
    route: "/",
    iconClasses: "fa fa-home mr-3  fa-lg sidebar-icons",
    name: "Home"
  },
  {
    route: "/donate",
    iconClasses: "fas fa-hand-holding-usd mr-3  fa-lg sidebar-icons",
    name: "Donate"
  },
  {
    route: "/profile",
    iconClasses: "fa fa-user mr-3 fa-lg sidebar-icons",
    name: "Profile"
  }
];

function SidebarElement({ route, iconClasses, name }) {
  return (
    <li className="nav-item">
      <Link
        to={route}
        className="nav-link text-light active-left-sidebar-ele"
      >
        <i className={iconClasses}></i>
        {name}
      </Link>
      <hr />
    </li>
    
  );
}

export { adminSidebarElements, donorSidebarElements, orphanSidebarElements, SidebarElement };
