import React, { useEffect, useState } from "react";
import "./Nav.css";

function Nav({ open }) {
  const [isMobile, setIsMobile] = useState(false);
  const [container, setContainer] = useState("nav-container");
  useEffect(() => {
    window.addEventListener(
      "resize",
      () => {
        setIsMobile(window.innerWidth <= 800);
      },
      true
    );

    if (isMobile) {
      open
        ? setContainer("nav-container")
        : setContainer("nav-container nav-container-closed");
    } else {
      setContainer("nav-container");
    }
    console.log(open, container, isMobile);
  }, [open, isMobile]);

  return (
    <div className={container}>
      <div className="tabs">
        <input type="radio" name="tabs" id="tab-1" />
        <label className="tab" for="tab-1">
          Home
        </label>
        <input type="radio" name="tabs" id="tab-2" />
        <label className="tab" for="tab-2">
          About
        </label>

        <input type="radio" name="tabs" id="tab-3" />
        <label className="tab" for="tab-3">
          Skills
        </label>
        <input type="radio" name="tabs" id="tab-4" />
        <label className="tab" for="tab-4">
          Projects
        </label>
        <input type="radio" name="tabs" id="tab-5" />
        <label className="tab" for="tab-5">
          Contact Me
        </label>
        <span className={isMobile ? "glider-y" : "glider-x"}></span>
      </div>
    </div>
  );
}

export default Nav;
