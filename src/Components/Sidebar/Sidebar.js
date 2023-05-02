import React, { useState } from "react";
import "./Sidebar.css";
import { Link, NavLink } from "react-router-dom";

const Sidebar = () => {
  const [activeMenu, setActiveMenu] = useState("contacts");

  return (
    <div className="sidebar-container">
      <div>
        <ul>
          <li>
            <Link
              to="/"
              className={activeMenu === "contacts" ? "is-active" : ""}
              onClick={() => setActiveMenu("contacts")}
            >
              Contacts
            </Link>
          </li>
          <li>
            <Link
              to="/charts"
              className={activeMenu === "charts" ? "is-active" : ""}
              onClick={() => setActiveMenu("charts")}
            >
              Charts
            </Link>
          </li>
          <li>
            <Link
              to="/maps"
              className={activeMenu === "maps" ? "is-active" : ""}
              onClick={() => setActiveMenu("maps")}
            >
              Maps
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
