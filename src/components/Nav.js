import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav class="navbar bg-dark">
      <div class="container">
        <h1 class="logo lg-heading text-light">
          <Link to={"/"}>TL</Link>
        </h1>
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
  );
};

export default Nav;
