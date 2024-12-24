// import React from 'react'
import "../styles/Header.css";
import reactIcon from "../assets/reactjs-icon.png";
const Header = () => {
  return (
    <nav>
      <div className="content">
        <img src={reactIcon}></img>
        <h1>ReactFacts</h1>
      </div>
    </nav>
  );
};

export default Header;
