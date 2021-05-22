import React from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";

const adminSidebarElements = [
  {
    route: "/",
    iconClasses: "fa fa-home mr-3 icon-sz sidebar-icons",
    name: "Home"
  },
  {
    route: "/donations",
    iconClasses: "fas fa-clipboard-list mr-3 fa-lg sidebar-icons",
    name: "Donations"
  },
  {
    route: "/orphans",
    iconClasses: "fas fa-child mr-3 fa-lg sidebar-icons",
    name: "Orphans"
  },
  {
    route: "/inventory",
    iconClasses: "fas fa-warehouse mr-3 fa-lg sidebar-icons",
    name: "Inventory"
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
