import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";
import { HamburgetMenuClose, HamburgetMenuOpen } from "./Icons";
import navLogo from "./nav.png"; // Import your logo image

function NavBar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <NavLink exact to="/" className="nav-logo">
            <img src={navLogo} alt="KrushiVikas Logo" className="logo-image" width="130px" /> {/* Use img tag for your logo */}
            <span style={{ fontFamily: "Vidaloka" }}>KrushiVikas</span>
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
              <a
                href="https://sidhhu0603-crop-prediction-quasar-app-3galyu.streamlit.app/"
                className="nav-links"
                onClick={handleClick}
                target="_blank"
                rel="noopener noreferrer"
              >
                PREDICTION
              </a>
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
            <li className="nav-item dropdown">
              <NavLink
                to="/blog"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                COMMUNITY <span className="arrow">&#9662;</span>
              </NavLink>
              <ul className="dropdown-menu">
                <li>
                  <NavLink
                    exact
                    to="/blog/posts"
                    activeClassName="active"
                    className="nav-links"
                    onClick={handleClick}
                  >
                    Post
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    exact
                    to="/blog/addpost"
                    activeClassName="active"
                    className="nav-links"
                    onClick={handleClick}
                  >
                    Add Post
                  </NavLink>
                </li>
              </ul>
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
