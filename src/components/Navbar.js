import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome} from '@fortawesome/free-solid-svg-icons';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <ul className="navbar-nav">
        <li className="nav-item">
          <FontAwesomeIcon icon={faHome} />
        </li>
        
      </ul>
      <div className="navbar-brand">
        <a href="/" className="navbar-logo">
          COMUNIKIDS
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
