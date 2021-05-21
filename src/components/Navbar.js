import React, { useState, useEffect } from "react";
import "./Navbar.css";
import Link from "./Link";

const navbarItems = ["accordion", "dropdown", "search", "translate"];

const Navbar = () => {
  const [activeItem, setActiveItem] = useState(navbarItems[0]);

  useEffect(() => {}, [activeItem]);

  const renderedNavbarItems = navbarItems.map((item, index) => {
    return (
      <Link
        className={item === activeItem ? "navbar-item-active" : "navbar-item"}
        href={item === navbarItems[0] ? "/" : `/${item}`}
        onClick={() => setActiveItem(navbarItems[index])}
      >
        {item.charAt(0).toUpperCase() + item.slice(1)}
      </Link>
    );
  });

  return <div className="navbar">{renderedNavbarItems}</div>;
};

export default Navbar;
