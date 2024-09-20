import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header id="header">
      <div className="container">
        <nav>
          <img src={"/mylogo.png"} className="logo" alt="Logo" />
          <ul className="nav justify-content-end">
            <li className="nav-item">
              <a className="nav-link active" href="#about">About Me</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#portfolio">Projects</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
        <div className="header-text">
          <p>Hello!</p>
          <h1>
            I'm <span>Alyza Nicole</span>
            <br /> a 3rd Year Science Computer Student <br /> from De La Salle Lipa
          </h1>
        </div>
      </div>
    </header>
  );
};

export default Header;
