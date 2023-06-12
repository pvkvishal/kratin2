// Header.js

import React from "react";

const Header = () => {
  return (
    <header
      style={{
        backgroundImage: `url(${"https://images.pexels.com/photos/628281/pexels-photo-628281.jpeg?auto=compress&cs=tinysrgb&w=600"})`,
        backgroundPosition: "center",

        backgroundRepeat: "no-repeat",
        color: "Blue",
        textAlign: "left",
        fontSize: "15px",
      }}
    >
      <h3 style={{ color: "Blue", textAlign: "center", fontSize: "15px" }}>
        Welcome To Old-Age-Astra
      </h3>
      <h2 style={{ color: "Orange", textAlign: "center" }}>
        We Make your Second inning Happening
      </h2>
    </header>
  );
};

export default Header;
