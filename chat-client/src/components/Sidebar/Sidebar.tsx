import React from "react";
import "./Sidebar.scss";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="sidebar-wrapper">
      <div className="sidenav">
        <div className="logo">
          <img src="http://placehold.jp/100x50.png" />
        </div>

        <div className="sidebar-image"> </div>

        <div
          className="side-menu"
          style={{ overflowY: "scroll", position: "relative" }}
        >
          <div className="nav-item">
            <img src={DashboardIcon} />
            <div className="text">Item 1</div>
          </div>

          <div className="nav-item">
            <img src={DashboardIcon} />
            <div className="text">Item 2</div>
          </div>
        </div>
      </div>
    </div>
  );

  function SidebarLink(props: { to?: any; children: any }) {
    let active = "";
    if (location.pathname == props.to) {
      console.log("pathname", location.pathname);
      active = "active";
    }

    return (
      <Link to={props.to} className={"nav-link " + active}>
        {props.children}
      </Link>
    );
  }
}
