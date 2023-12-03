import React, { useState } from "react";
// import "./Navigation.css";
import MenuList from "../MenuList/MenuList";
import Humburger from "../humburger/Humburger";

function Navigation() {
  const [open, setOpen] = useState(false);
  const [links, setActive] = useState([
    {
      title: "Home",
      link: "#home",
      active: true,
    },
    { title: "About", link: "#about", active: false },
    { title: "Skills", link: "#skills", active: false },
    { title: "Projects", link: "#projects", active: false },
  ]);

  return (
    <div className="navbar">
      <Humburger setOpen={setOpen} open={open} />
      <MenuList
        links={links}
        type="expanded"
        open={open}
        setActive={setActive}
      />

      <MenuList links={links} setActive={setActive} />
    </div>
  );
}

export default Navigation;
