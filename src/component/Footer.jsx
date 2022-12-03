import React from "react";
import {
  AiFillTwitterCircle,
  AiFillYoutube,
  AiOutlineWhatsApp,
  AiFillInstagram,
} from "react-icons/ai";
const Footer = () => {
  return (
    <>
      <div className="sub">
        <div className="left">
          <h1>Subscribe Our Newsletter</h1>
          <p>
            Don't miss out on your discounts. Subscribe to our email newsletter
            to get the best offers, discounts, coupons, gifts and much more.
          </p>
        </div>
        <div className="right">
          <input type="email" placeholder="ENTER YOUR EMAIL" />
          <button>SUBSCRIBE</button>
        </div>
      </div>
      <footer>
        <div className="one">
          <h3>Our information</h3>
          <p>1234 - Peru</p>
          <p>La Libertad</p>
          <p>43210 123-456-789</p>
        </div>
        <div className="two">
          <h3>About Us </h3>
          <p>Support Center</p>
          <p>Customer Support</p>
          <p>About Us</p>
          <p>Copy Right</p>
        </div>
        <div className="three">
          <h3>Product </h3>
          <p>Support Center</p>
          <p>Customer Support</p>
          <p>About Us</p>
          <p>Copy Right</p>
        </div>
        <div className="four">
          <h3>SOCIAL</h3>
          <AiFillTwitterCircle />
          <AiFillInstagram />
          <AiFillYoutube />
          <AiOutlineWhatsApp />
        </div>
      </footer>
    </>
  );
};

export default Footer;
