import React from "react";
import "./Humburger.css";

function Humburger({ open, setOpen }) {
  return (
    <div
      className={open ? "opened-button button" : "closed-button button"}
      onClick={() => {
        setOpen(!open);
      }}
    >
      <div className={open ? "close-spans spans" : "spans"}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
}

export default Humburger;
