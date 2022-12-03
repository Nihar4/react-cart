import React from "react";
import { FiShoppingBag } from "react-icons/fi";
import { toast } from "react-hot-toast";
import img1 from "../assets/img/product1.png";
import img2 from "../assets/img/product2.png";
import img3 from "../assets/img/product3.png";
import img4 from "../assets/img/product4.png";
import img5 from "../assets/img/product5.png";
import { useDispatch } from "react-redux";

const Products_card = ({ img, name, price, handler, id, qty }) => (
  <div className="prod">
    <img src={img} alt="" />
    <h3>{name}</h3>
    <p>${price}</p>
    <button
      className="onclickbtn"
      onClick={() => handler({ img, name, price, id, qty })}
    >
      <FiShoppingBag />
    </button>
  </div>
);

const products_array = [
  {
    name: "SPIRIT ROSE",
    price: 100,
    id: "a78sdfgmnbvc",
    img: img1,
  },
  {
    name: "KHAKI PILOT",
    price: 200,
    id: "rtgbasnbcdfgmkmlk",
    img: img2,
  },
  {
    name: "JUBILEE BLACK",
    price: 300,
    id: "lodaasdfghjksvnjkdndfg",
    img: img3,
  },
  {
    name: "FOSIL ME3",
    price: 300,
    id: "aasdfghjksmnbvcxzvnjkdndfg",
    img: img4,
  },
  {
    name: "DUCHEN",
    price: 300,
    id: "aasdfertyughjksvnjkdndfg",
    img: img5,
  },
];

const Products = () => {
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
      <div className="products" id="products">
        <h1>PRODUCTS</h1>
        <div className="product">
          {products_array.map((i) => (
            <Products_card
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

export default Products;
