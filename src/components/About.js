import React from "react";
import { Link } from "react-router-dom";

import Nav from "./Nav";
import NavTry from "./NavTry";

const About = () => {
  return (
    <>
      <Nav></Nav>

      <section className="about-us">
        <div className="container">
          <div className="about-content">
            <h2 className="lg-heading about-heading">About Us</h2>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum
              consequuntur beatae repellendus delectus eum, repudiandae tenetur
              earum dolores eaque doloremque.
            </p>
            <div className="about-ul">
              <div className="right">
                <ul>
                  <li>Lorem ipsum dolor</li>
                  <li>Lorem ipsum dolor</li>
                  <li>Lorem ipsum dolor</li>
                </ul>
              </div>
              <div className="left">
                <ul>
                  <li>Lorem ipsum dolor</li>
                  <li>Lorem ipsum dolor</li>
                  <li>Lorem ipsum dolor</li>
                </ul>
              </div>
            </div>
            {/* <!-- about-ul --> */}

            <div className="about-count">
              <div className="count-items">
                <div className="count-item item-1">
                  <span>500</span>
                  <p>Travelled</p>
                </div>
                <div className="count-item item-2">
                  <span>300</span>
                  <p>Places</p>
                </div>
                <div className="count-item item-3">
                  <span>4000</span>
                  <p>Guide</p>
                </div>
                <div className="count-item item-4">
                  <span>3540</span>
                  <p>Support</p>
                </div>
              </div>
            </div>

            <div className="cta-banner">
              <div className="cta-text">
                <p>
                  What are you waiting for? Contact us to book your next tour.
                </p>
              </div>
              <div className="cta-button">
                <Link to={"/contact"}>Contact Us</Link>
                {/* <a href="./contact.html">Contact Us</a> */}
              </div>
            </div>
          </div>
        </div>
      </section>

      <NavTry></NavTry>
    </>
  );
};

export default About;
