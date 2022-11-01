import React from "react";
import { HashLink } from "react-router-hash-link";

const NavTry = () => {
  return (
    <nav class="navbar bg-dark">
      <div class="container">
        <h1 class="logo lg-heading text-light">TL</h1>
        <ul className="nav-items">
          <li className="nav-item">
            <HashLink to={"/contact#form"}>Contact Form</HashLink>
            {/* <Link to={"/"}>Home</Link> */}
            {/* <a href="./index.html">Home</a> */}
          </li>
          <li className="nav-item">
            <HashLink to={"/#explore-places"}>Explore Places</HashLink>
            {/* <a href="./about.html">About</a> */}
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavTry;
