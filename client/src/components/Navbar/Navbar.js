import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
function Navbar(props) {
  return (
    <nav className="navbar">
      <div className="navbar_logo">
        <h2>
          <i className="fa fa-mobile-phone"></i>
          Guy phone
        </h2>
      </div>

      <ul className="navbar_links">
        <li>
          <div
            onClick={() => props.setIsShowCart(true)}
            className="cart_sidecart"
          >
            <i className="fas fa-shopping-cart"></i>
            My Cart
            <span className="cart_logo">{props.countItem}</span>
          </div>
        </li>
        <li>
          <Link
            className="shop_link"
            onClick={() => props.filterPhones("All")}
            to="/"
          >
            Shop
          </Link>
        </li>
      </ul>
    </nav>
  );
}
export default Navbar;
