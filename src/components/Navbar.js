import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../assets/logo.png";

function Navbar() {
  return (
    <header>
      <nav className="navbar">
        <NavLink exact to="/" className="logo">
          <img src={Logo} alt="logo" />
          <span className="logo__text"> sarscode.</span>
        </NavLink>
        <div className="navbar__nav">
          <NavLink
            to="/about"
            className="navlink"
            activeClassName="navlink--active"
          >
            about
          </NavLink>
          <NavLink
            to="/work"
            className="navlink"
            activeClassName="navlink--active"
          >
            work
          </NavLink>
          <NavLink
            to="/writing"
            className="navlink"
            activeClassName="navlink--active"
          >
            writing
          </NavLink>
          <NavLink
            to="/contact"
            className="navlink"
            activeClassName="navlink--active"
          >
            contact
          </NavLink>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
