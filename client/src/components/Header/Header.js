import React from "react";
import "./Header.css";
function Header(props) {
  return (
    <nav>
      <div className="company-sort">
        <label>Filter by company:</label>
        <select
          onChange={(e) => {
            props.filterPhones(e.target.value);
          }}
        >
          {props.companies.map((item, i) => (
            <option key={i}>{item}</option>
          ))}
        </select>
      </div>
    </nav>
  );
}
export default Header;
