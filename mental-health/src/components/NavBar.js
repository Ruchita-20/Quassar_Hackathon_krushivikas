import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";
import { CodeIcon, HamburgetMenuClose, HamburgetMenuOpen } from "./Icons";

function NavBar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <NavLink exact to="/" className="nav-logo">
            <span style={{ fontFamily: "Vidaloka" }}>KrushiVikas</span>
            <span className="icon">
              <CodeIcon />
            </span>
          </NavLink>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
                exact
                to="/"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                HOME
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/prediction"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                PREDICTION
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/disease-detection"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                DISEASE DETECTION
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/blog"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                BLOG
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/yojana"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                YOJANA
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/feedback"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                FEEDBACK
              </NavLink>
            </li>
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            {click ? (
              <span className="icon">
                <HamburgetMenuOpen />{" "}
              </span>
            ) : (
              <span className="icon">
                <HamburgetMenuClose />
              </span>
            )}
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
