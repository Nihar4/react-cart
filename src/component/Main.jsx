import React from "react";
import { toast } from "react-hot-toast";
import { useDispatch } from "react-redux";
import img from "../assets/img/home.png";

const main_array = {
  name: "COLLECTIONS B720",
  price: 1245,
  img: img,
  id: "qwertyui",
  qty: 1,
};

const Main = () => {
  const dispatch = useDispatch();
  const AddToCartHandler = (i) => {
    // console.log(i.main_array);
    dispatch({ type: "addToCart", payload: i.main_array });
    dispatch({
      type: "calculate",
    });
    toast.success("ADDED TO CART");
  };
  return (
    <main id="home">
      <div className="left">
        <h1>COLLECTIONS B720</h1>
        <p>
          Latest arrival of the new imported watches of the B720 series, with a
          modern and resistant design.
        </p>
        <h2>$1245</h2>
        <div className="btn">
          <button className="first">Discover</button>
          <button
            className="second"
            onClick={() => AddToCartHandler({ main_array })}
          >
            ADD TO CART
          </button>
        </div>
      </div>

      <div className="right">
        <img src={img} alt="" />
      </div>
    </main>
  );
};

export default Main;
