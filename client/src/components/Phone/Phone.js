import React from "react";
import CartProvider from "../../contexts/CartProvider";
import { useContext } from "react";
import "./Phone.css";
import { Link } from "react-router-dom";
function Phone(phone) {
  const { addToCart } = useContext(CartProvider);
  return (
    <div className="phone-wrapper">
      <div className="phone-image">
        <img src={phone.proprety.image} alt={phone.proprety.company} />
      </div>
      <div className="phone-info">
        <Link to={`/PhonePage/${phone.proprety.id}`} className="link-product">
          <h5 className="phone-title">{phone.proprety.title}</h5>
        </Link>
        <h6 className="phone-price">${phone.proprety.price}</h6>
        <p>
          <button onClick={() => addToCart(phone.proprety)} type="button">
            Add To Cart
          </button>
        </p>
      </div>
    </div>
  );
}
export default Phone;
