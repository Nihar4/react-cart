import React from "react";
import { AiFillDelete } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import img1 from "../assets/img/featured1.png";

const Cart = () => {
  const { cartItems, total, tax, shipping, subtotal } = useSelector(
    (state) => state.cart
  );
  const dispatch = useDispatch();
  const decrement = (id) => {
    dispatch({
      type: "decrement",
      payload: id,
    });

    dispatch({
      type: "calculate",
      payload: id,
    });
  };
  const increment = (id) => {
    dispatch({
      type: "addToCart",
      payload: { id },
    });
    dispatch({
      type: "calculate",
      payload: id,
    });
  };
  const delete_handler = (id) => {
    dispatch({
      type: "delete_handler",
      payload: id,
    });
    dispatch({
      type: "calculate",
      payload: id,
    });
  };

  return (
    <div className="cart">
      <div className="left">
        {cartItems.length > 0 ? (
          cartItems.map((i) => (
            <Cartitems
              img={i.img}
              name={i.name}
              price={i.price}
              qty={i.qty}
              id={i.id}
              decrement={decrement}
              increment={increment}
              delete_handler={delete_handler}
            />
          ))
        ) : (
          <h1>No Items Yet</h1>
        )}
      </div>
      <div className="right">
        <h2>SubTotal: ${subtotal}</h2>
        <h2>Shipping: ${shipping}</h2>
        <h2>Tax: ${tax}</h2>
        <h2>Total: ${total}</h2>
      </div>
    </div>
  );
};

const Cartitems = ({
  img,
  name,
  price,
  qty,
  decrement,
  increment,
  delete_handler,
  id,
}) => {
  return (
    <div className="cartitems">
      <img src={img} alt="" />
      <article>
        <h3>{name}</h3>
        <p>${price}</p>
      </article>
      <div>
        <button onClick={() => decrement(id)}>-</button>
        <p>{qty}</p>
        <button onClick={() => increment(id)}>+</button>
      </div>
      <AiFillDelete onClick={() => delete_handler(id)} />
    </div>
  );
};

export default Cart;
