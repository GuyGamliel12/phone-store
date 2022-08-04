import React from "react";
import Cart from "../../components/Cart/Cart";
import { Link } from "react-router-dom";
import "./CartPage.css";
function CartPage(cartPhonesList) {
  const phones = cartPhonesList.cartPhones.map((item) => (
    <Cart proprety={item} key={item.id} />
  ));
  const totalPrice = cartPhonesList.cartPhones.reduce(
    (acc, curr) => Number(acc + curr.price * curr.quantity),
    0
  );
  return (
    <div className="cartPage">
      <div className="cartPage-left">
        <h2>Shopping Cart</h2>
        {cartPhonesList.cartPhones.length === 0 ? (
          <div>
            your cart is empty{" "}
            <Link onClick={() => cartPhonesList.filterPhones("All")} to="/">
              Go Back
            </Link>
          </div>
        ) : (
          <div>{phones}</div>
        )}
      </div>
      {cartPhonesList.cartPhones.length === 0 ? (
        <div></div>
      ) : (
        <div className="cartPage-right">
          <div className="cartPage-info">
            <p>Subtotal ({cartPhonesList.countItem}) item</p>
            <p>Total price: ${totalPrice}</p>
          </div>
          <div>
            <Link to="/PaymentPage" className="link-payment">
              Preceed To Checkout
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
export default CartPage;
