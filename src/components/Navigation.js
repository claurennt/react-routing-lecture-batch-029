import React from "react";
import { NavLink, Link } from "react-router-dom";
const Navigation = () => {
  return (
    <div>
      <nav style={{ display: "flex", justifyContent: "space-around" }}>
        <NavLink
          to="/"
          style={({ isActive }) => ({
            backgroundColor: isActive ? "aquamarine" : "blue",
          })}
        >
          Home
        </NavLink>
        <NavLink
          to="contact"
          style={({ isActive }) => ({
            backgroundColor: isActive ? "aquamarine" : "blue",
          })}
        >
          Contact
        </NavLink>
        <NavLink
          to="about"
          style={({ isActive }) => ({
            backgroundColor: isActive ? "aquamarine" : "blue",
          })}
        >
          About
        </NavLink>
        <NavLink
          to="team"
          style={({ isActive }) => ({
            backgroundColor: isActive ? "aquamarine" : "blue",
          })}
        >
          Team
        </NavLink>
        {/* <Link to="/">Home</Link>
        <Link to="contact">Contact</Link>
        <Link to="about">About</Link> */}
      </nav>
    </div>
  );
};

export default Navigation;
