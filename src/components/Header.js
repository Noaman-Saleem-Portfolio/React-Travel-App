import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header" id="home">
      <nav className="navbar">
        <div className="container">
          <h1 className="logo lg-heading text-light">TL</h1>
          <ul className="nav-items">
            <li className="nav-item">
              <Link to={"/"}>Home</Link>
              {/* <a href="./index.html">Home</a> */}
            </li>
            <li className="nav-item">
              <Link to={"/about"}>About</Link>
              {/* <a href="./about.html">About</a> */}
            </li>
            <li className="nav-item">
              <Link to={"/contact"}>Contact</Link>
              {/* <a href="./contact.html">Contact</a> */}
            </li>
          </ul>
        </div>
      </nav>

      <div className="header-content">
        <h1 className="lg-heading text-light">Travel The World</h1>
        <p className="text-light">
          Discover the life in the whole universe. The best gigt given by
          nature.
        </p>
        <a href="#explore-places" className="btn btn-primary text-red">
          Explore places
        </a>
      </div>
    </div>
  );
};

export default Header;
