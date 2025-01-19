import React from "react";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="sidebar">
      <h2>Masoud Rafiee</h2>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/mentor-form">Mentor Form</Link>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
