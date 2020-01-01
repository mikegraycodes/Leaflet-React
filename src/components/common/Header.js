import React from "react";
import "./Header.scss";
import { NavLink } from "react-router-dom";

const Header = () => {
  const activeStyle = { color: "#ffffff" };
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/maps" activeStyle={activeStyle} exact>
            Maps
          </NavLink>
        </li>

        <li>
          <NavLink to="/courses" activeStyle={activeStyle}>
            Courses
          </NavLink>
        </li>

        <li>
          <NavLink to="/about" activeStyle={activeStyle}>
            About
          </NavLink>
        </li>

        <li>
          <NavLink to="/map" activeStyle={activeStyle}>
            Map
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
