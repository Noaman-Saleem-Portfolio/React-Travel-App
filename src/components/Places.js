import React from "react";

import image1 from "../assets/showcase-photo1.jpg";
import image2 from "../assets/showcase-photo3.jpg";

const Places = () => {
  return (
    <div className="showcase" id="explore-places">
      <div className="container">
        <div className="row row1">
          <div className="image">
            <img src={image2} alt="" />
          </div>
          <div className="content">
            <h1>Paris Dalas</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Similique, doloribus dolore quis labore cumque voluptatum at.
            </p>

            <a href="#home" className="btn btn-secondary text-red">
              More
            </a>
          </div>
        </div>
        <div className="row row2">
          <div className="image">
            <img src={image1} alt="" />
          </div>
          <div className="content">
            <h1>Paris Dalas</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Similique, doloribus dolore quis labore cumque voluptatum at.
            </p>

            <a href="#home" className="btn btn-secondary text-red">
              More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Places;
