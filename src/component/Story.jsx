import React from "react";
import img1 from "../assets/img/story.png";
const Story = () => {
  return (
    <div className="story">
      <div className="left">
        <img src={img1} alt="" />
        <div className="square"></div>
      </div>
      <div className="right">
        <h3>OUR STORY</h3>
        <h1>Inspirational Watch of this year</h1>
        <p>
          The latest and modern watches of this year, is available in various
          presentations in this store, discover them now.
        </p>
        <a href="#home">
          <button>DISCOVER</button>
        </a>
      </div>
    </div>
  );
};

export default Story;
