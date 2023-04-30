import React from "react";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar-container">
      <div>
        <ul>
          <li>
            <label style={{ fontWeight: "500" }}>Contacts</label>
          </li>
          <li>
            <label style={{ fontWeight: "500" }}>Charts and Graphs</label>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
