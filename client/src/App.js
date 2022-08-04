import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import CartPage from "./pages/CartPage/CartPage";
import { useState, useEffect } from "react";
import Phones from "./components/Phones/Phones";
import CartProvider from "./contexts/CartProvider";
import PaymentPage from "./pages/PaymentPage/PaymentPage";
import PhonePage from "./pages/PhonePage/PhonePage";
import Header from "./components/Header/Header";
import Sidecart from "./components/Sidecart/Sidecart";
var initialPhones = [];
function App() {
  const [phonesList, setPhonesList] = useState(initialPhones);
  const [isShowCart, setIsShowCart] = useState(false);

  const companies = [
    "All",
    ...initialPhones
      .map((p) => p.company)
      .filter((value, index, array) => array.indexOf(value) === index)
  ];

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = () => {
    fetch("/api/phones")
      .then((res) => res.json())
      .then((arrPhone) => {
        setPhonesList(arrPhone);
        initialPhones = arrPhone.slice();
      });
  };

  const [cartPhonesList, setCartPhonesList] = useState([]);

  const filterPhones = (company) => {
    setPhonesList(
      company === "All"
        ? initialPhones
        : initialPhones.filter(
            (companyFilter) => companyFilter.company === company
          )
    );
  };

  function addToCart(phone) {
    const foundPhone = cartPhonesList.find((item) => item.id === phone.id);
    if (foundPhone) {
      setCartPhonesList(
        cartPhonesList.map((item) =>
          item.id === phone.id
            ? { ...foundPhone, quantity: foundPhone.quantity + 1 }
            : item
        )
      );
    } else {
      setCartPhonesList([...cartPhonesList, { ...phone, quantity: 1 }]);
    }
  }

  function removeFromCart(id) {
    const items = cartPhonesList.filter((item) => item.id !== id);
    setCartPhonesList(items);
  }

  function removeOneFromCart(phone) {
    const foundPhone = cartPhonesList.find((item) => item.id === phone.id);
    if (foundPhone.quantity === 1) {
      const items = cartPhonesList.filter((item) => item.id !== phone.id);
      setCartPhonesList(items);
    } else {
      setCartPhonesList(
        cartPhonesList.map((item) =>
          item.id === phone.id
            ? { ...foundPhone, quantity: foundPhone.quantity - 1 }
            : item
        )
      );
    }
  }

  const countItem = cartPhonesList.reduce(
    (acc, curr) => Number(acc + curr.quantity),
    0
  );
  return (
    <CartProvider.Provider
      value={{ addToCart, removeFromCart, removeOneFromCart }}
    >
      <div>
        <Navbar
          countItem={countItem}
          filterPhones={filterPhones}
          setIsShowCart={setIsShowCart}
        />
        {isShowCart && (
          <Sidecart
            cartPhones={cartPhonesList}
            countItem={countItem}
            setIsShowCart={setIsShowCart}
          />
        )}
        <main>
          <Routes>
            <Route
              path="/"
              element={[
                <Header
                  key="1"
                  companies={companies}
                  filterPhones={filterPhones}
                />,
                <Phones key="2" phones={phonesList} />
              ]}
            />
            <Route
              path="/CartPage"
              element={
                <CartPage
                  cartPhones={cartPhonesList}
                  countItem={countItem}
                  filterPhones={filterPhones}
                />
              }
            />
            <Route
              path="/PaymentPage"
              element={
                <PaymentPage
                  setCartPhonesList={setCartPhonesList}
                  filterPhones={filterPhones}
                />
              }
            />
            <Route
              path="/PhonePage/:id"
              element={<PhonePage phones={phonesList} />}
            />
          </Routes>
        </main>
      </div>
    </CartProvider.Provider>
  );
}

export default App;
