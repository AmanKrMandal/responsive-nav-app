import React, { useState } from "react";
import "./Header.scss";

const Header = ({ onNavClick }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="header">
      <nav className="navbar">
        <div className="nav-logo">MyApp</div>
        <ul className={`nav-links ${isOpen ? "open" : ""}`}>
          <li onClick={() => onNavClick("one")}>One</li>
          <li onClick={() => onNavClick("two")}>Two</li>
          <li onClick={() => onNavClick("three")}>Three</li>
        </ul>
        <div className="hamburger" onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </nav>
    </header>
  );
};

export default Header;
