import React from "react";
import "./Sidecart.css";
import Cart from "../Cart/Cart";
import { Link } from "react-router-dom";
function Sidecart(cartPhonesList) {
  const phones = cartPhonesList.cartPhones.map((item) => (
    <Cart proprety={item} key={item.id} />
  ));
  const totalPrice = cartPhonesList.cartPhones.reduce(
    (acc, curr) => Number(acc + curr.price * curr.quantity),
    0
  );
  return (
    <div
      className="sidecart-wrapper"
      onClick={() => cartPhonesList.setIsShowCart(false)}
    >
      <div className="sidecart" onClick={(e) => e.stopPropagation()}>
        <h1> My Cart</h1>
        {cartPhonesList.cartPhones.length === 0 ? (
          <div>your cart is empty</div>
        ) : (
          <div className="sidecart-phone">
            {phones}
            <h3>price: ${totalPrice}</h3>
            <Link className="full-cart" to="/CartPage">
              <button onClick={() => cartPhonesList.setIsShowCart(false)}>
                <h3>Your Cart</h3>
              </button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
export default Sidecart;
