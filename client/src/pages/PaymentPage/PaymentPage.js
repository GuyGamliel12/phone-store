import React from "react";
import { Link } from "react-router-dom";
import "./PaymentPage.css";
function PaymentPage(props) {
  return (
    <div className="body1">
      <form action="action">
        <h1>Payment</h1>
        <label htmlFor="name">Name</label>
        <br />
        <input
          className="box1"
          type="text"
          name="name"
          id="name"
          placeholder="Enter Name"
        />
        <br />
        <label htmlFor="email">Email</label>
        <br />
        <input
          className="box1"
          type="email"
          name="email"
          id="email"
          placeholder="Enter Email"
        />
        <br />
        <label htmlFor="cardnumber">Card Number</label>
        <br />
        <input
          className="box1"
          type="number"
          name="number"
          id="number"
          placeholder="1234-1234-1234-1234"
        />
        <div className="div1">
          <label htmlFor="cardcox">Card exp month</label> <br />
          <input type="month" name="month" id="month" placeholder="MM" />
        </div>
        <div className="div1">
          <label htmlFor="cardyear">Card exp year </label>
          <br />
          <input type="year" name="year" id="year" placeholder="YYYY" />
        </div>
        <div className="div1">
          <label htmlFor="cardCVC">Card CVC</label> <br />
          <input type="cvc" name="cvc" id="CVC" placeholder="cvc" />
        </div>
        <div className="link-div">
          <Link className="link-Payment" to="/">
            <button
              onClick={() => {
                alert("Payment done");
                props.setCartPhonesList([]);
                props.filterPhones("All");
              }}
            >
              Pay Now
            </button>
          </Link>
        </div>
      </form>
    </div>
  );
}
export default PaymentPage;
