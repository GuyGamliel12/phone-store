import React from "react";
import "./PhonePage.css";
import { useParams } from "react-router-dom";
import CartProvider from "../../contexts/CartProvider";
import { useContext } from "react";
function PhonePage(phonesLists) {
  const params = useParams();
  const { addToCart } = useContext(CartProvider);
  const phone = phonesLists.phones.find(
    (item) => Number(item.id) === Number(params.id)
  );
  let phoneExist = {};
  if (phone) {
    phoneExist = phone;
  }
  return (
    <div className="phone-page">
      <div className="image-phone">
        <img src={phoneExist.image} alt={phoneExist.title} />
      </div>
      <div className="info-phone">
        <p className="name-phone">{phoneExist.title}</p>
        <p className="name-phone">Price: ${phoneExist.price}</p>
        <p className="description-phone">Description: {phoneExist.info}</p>
        <p>
          <button type="button" onClick={() => addToCart(phoneExist)}>
            Add To Cart
          </button>
        </p>
      </div>
    </div>
  );
}
export default PhonePage;
