import React from "react";
import { AiFillYoutube, AiFillInstagram, AiFillFacebook } from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="social-media-icons">
        <a
          href="https://www.youtube.com/watch?v=qg-8roYYmT4&list=RDMM&index=27"
          target={"blank"}>
          <AiFillYoutube className="icon"></AiFillYoutube>
        </a>
        <a
          href="https://www.youtube.com/watch?v=qg-8roYYmT4&list=RDMM&index=27"
          target={"blank"}>
          <AiFillFacebook className="icon"></AiFillFacebook>
        </a>
        <a
          href="https://www.youtube.com/watch?v=qg-8roYYmT4&list=RDMM&index=27"
          target={"blank"}>
          <AiFillInstagram className="icon"></AiFillInstagram>
        </a>
      </div>
      <p>Travelogics &copy;, 2022 All Right reserved</p>
    </footer>
  );
};

export default Footer;
