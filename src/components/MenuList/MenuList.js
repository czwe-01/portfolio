import React, { useEffect, useState } from "react";
import Link from "../link/Link";
import "./MenuList.css";

function MenuList({ links, open, type, setActive }) {
  const [column, setType] = useState("column");
  const [linksData, setData] = useState([]);

  useEffect(() => {
    open ? setType("column open-column") : setType("column closed-column");
    open ? setData(links) : setData([]);
    if (open === undefined) {
      setType("row");
      setData(links);
    }
  }, [open, links]);

  function SetActiveLink(title) {
    setActive(
      linksData.map((link) => {
        return link.title === title
          ? { ...link, active: true }
          : { ...link, active: false };
      })
    );
  }

  return (
    <ul id="menu" className={type === "expanded" ? column : "row"}>
      {linksData.map((link, i) => (
        <Link
          key={"link-" + i}
          title={link.title}
          address={link.link}
          active={link.active}
          SetActiveLink={SetActiveLink}
        />
      ))}
    </ul>
  );
}

export default MenuList;
