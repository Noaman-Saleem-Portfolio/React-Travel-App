import React from "react";

import Nav from "./Nav";

import image3 from "../assets/company-img.jpg";
import Footer from "./Footer";

const Contact = () => {
  return (
    <>
      <Nav></Nav>

      <section className="contact">
        <div className="container">
          <div className="contact-boxes">
            <div className="contact-box1 text-grey">
              <div className="location">
                <i className="fa-sharp fa-solid fa-location-dot fa-3x text-red"></i>
                <h2 className="md-heading">Location</h2>
                <p>House # 465 A, 2/3 Muhallah Garha, Jhang Road, Chiniot.</p>
              </div>
              <div className="email">
                <i className="fa-sharp fa-solid fa-envelope-circle-check fa-3x text-red"></i>
                <h2 className="md-heading">Email</h2>
                <p>noaman2266@gmail.com</p>
              </div>
              <div className="call">
                <i className="fa-sharp fa-solid fa-square-phone fa-3x text-red"></i>
                <h2 className="md-heading">Call</h2>
                <p>+923217715619</p>
              </div>
              <img src={image3} alt=""></img>
            </div>
            {/* <!-- contact-box-1 --> */}
            <div className="contact-box2" id="form">
              <h2 className="md-heading text-grey">Contact Us</h2>
              <p className="text-grey">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Cupiditate, quam quasi. Quia adipisci vero !
              </p>

              <div className="contact-form">
                <form action="">
                  <div className="form-group">
                    <label for="username">Username</label>
                    <input type="text" id="username"></input>
                  </div>
                  <div className="form-group">
                    <label for="email">Email</label>
                    <input type="text" id="email"></input>
                  </div>
                  <div className="form-group">
                    <label for="phone">Phone</label>
                    <input type="text" id="phone"></input>
                  </div>
                  <div className="form-group">
                    <label for="message">Message</label>
                    <textarea
                      name=""
                      id="message"
                      cols="30"
                      rows="10"></textarea>
                  </div>
                  {/* <!-- <input className="submit-btn" type="submit" value="Submit Details"> --> */}
                  <button className="submit-btn">Submit Details</button>
                </form>
              </div>
              {/* <!-- contact-form --> */}
            </div>
          </div>
          {/* <!-- contact-boxes --> */}
        </div>
        {/* <!-- container --> */}
      </section>

      <Footer></Footer>
    </>
  );
};

export default Contact;
