import React from "react";
import Phone from "../Phone/Phone";
import "./Phones.css";

function Phones(phonesLists) {
  const phones = phonesLists.phones.map((item) => (
    <Phone proprety={item} key={item.id} />
  ));
  return <section className="phones">{phones}</section>;
}
export default Phones;
