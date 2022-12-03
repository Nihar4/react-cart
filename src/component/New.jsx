import React from "react";
import { toast } from "react-hot-toast";
import img1 from "../assets/img/new1.png";
import img2 from "../assets/img/new2.png";
import img3 from "../assets/img/new3.png";
import img4 from "../assets/img/new4.png";
import { useDispatch } from "react-redux";
const New_card = ({ img, name, price, handler, id, qty }) => (
  <div className="new">
    <span>NEW</span>
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

const new_array = [
  {
    name: "NEW1",
    price: 600,
    id: "a78sdfgm987nbvc",
    img: img1,
  },
  {
    name: "NEW2",
    price: 1000,
    id: "rtgba12snbcdfgmkmlk",
    img: img2,
  },
  {
    name: "NEW3",
    price: 800,
    id: "lodaasdf67ghjksvnjkdndfg",
    img: img3,
  },
  {
    name: "NEW4",
    price: 700,
    id: "aasdfghjksasdfghmnbvcxzvnjkdndfg",
    img: img4,
  },
];

const New = () => {
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
      <div className="new_container" id="new">
        <h1>NEW ARRIVALS</h1>
        <div className="news">
          {new_array.map((i) => (
            <New_card
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
    </>
  );
};

export default New;
