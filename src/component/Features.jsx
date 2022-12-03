import React from "react";
import img1 from "../assets/img/featured1.png";
import img2 from "../assets/img/featured2.png";
import img3 from "../assets/img/featured3.png";
import toast from "react-hot-toast";
import Story from "./Story";
import { useDispatch } from "react-redux";

const Features_card = ({ img, name, price, handler, id, qty }) => (
  <div className="feat">
    <span>Sale</span>
    <img src={img} alt="" />
    <h3>{name}</h3>
    <p>${price}</p>
    <button
      className="onclickbtn"
      onClick={() => handler({ img, name, price, id, qty })}
    >
      ADD TO CART
    </button>
  </div>
);

const features_array = [
  {
    name: "JAZZMASTER",
    price: 100,
    id: "asdfg",
    img: img1,
  },
  {
    name: "INGERSOLL",
    price: 200,
    id: "asdfgmkmlk",
    img: img2,
  },
  {
    name: "ROSE GOLD",
    price: 300,
    id: "asvnjkdndfg",
    img: img3,
  },
];

const Features = () => {
  const dispatch = useDispatch();
  const AddToCartHandler = (i) => {
    // console.log(i.main_array);
    dispatch({ type: "addToCart", payload: i });
    dispatch({
      type: "calculate",
    });
    toast.success("ADDED TO CART");
  };
  return (
    <>
      <div className="features" id="features">
        <h1>FEATURES</h1>
        <div className="featu">
          {features_array.map((i) => (
            <Features_card
              key={i.id}
              img={i.img}
              name={i.name}
              id={i.id}
              price={i.price}
              qty={1}
              handler={AddToCartHandler}
            />
          ))}
        </div>
      </div>
      <Story />
    </>
  );
};

export default Features;
