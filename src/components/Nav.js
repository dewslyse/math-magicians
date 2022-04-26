import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => (
  <header className="navbar">
    <div className="navbar-inner container">
      <h1 className="main-caption">Math Magicians</h1>
      <nav>
        <ul className="nav">
          <li className="nav-links">
            <Link to="/">Home</Link>
          </li>
          <li className="nav-links">
            <Link to="calculator">Calculator</Link>
          </li>
          <li className="nav-links">
            <Link to="quote">Quote</Link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
);

export default Nav;
