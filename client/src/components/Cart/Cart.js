import React from "react";
import "./Cart.css";
import { useContext } from "react";
import CartProvider from "../../contexts/CartProvider";
function Cart(phone) {
  const { removeFromCart, addToCart, removeOneFromCart } = useContext(
    CartProvider
  );
  return (
    <div className="cart-item">
      <div className="cart-item-img">
        <img src={phone.proprety.image} alt={phone.proprety.company} />
      </div>
      <p>{phone.proprety.title}</p>
      <div className="add-remove-one-cart ">
        <button
          className="addOne-cart"
          onClick={() => addToCart(phone.proprety)}
        >
          <i className="fas fa-plus"></i>
        </button>
        <p>{phone.proprety.quantity}</p>
        <button
          className="removeOne-cart"
          onClick={() => removeOneFromCart(phone.proprety)}
        >
          <i className="fas fa-minus"></i>
        </button>
      </div>
      <p className="cart-item-price">
        ${phone.proprety.price * phone.proprety.quantity}
      </p>
      <button
        onClick={() => removeFromCart(phone.proprety.id)}
        className="cart-item-deleteBtn"
      >
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
}
export default Cart;
