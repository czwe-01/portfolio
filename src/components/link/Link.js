import React from "react";
import "./Link.css";

function Link({ title, address, active, SetActiveLink }) {
  return (
    <li className={active ? "active" : ""} onClick={() => SetActiveLink(title)}>
      <a href={address} className="menu-item">
        <span>{title} </span>
      </a>
    </li>
  );
}

export default Link;
