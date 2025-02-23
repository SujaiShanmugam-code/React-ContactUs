import React from "react";

const Navigation = () => {
  return (
    <nav>
      <div>
        <img
          className="logo"
          src="./src/assets/images/Sj_Logo_5.png"
          alt="mylogo"
        />
      </div>

      <ul className="nav-list">
        <li>Home</li>
        <li>About</li>
        <li>Contact Us</li>
      </ul>
    </nav>
  );
};

export default Navigation;
