import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';

import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-brand">
      
      </div>
      <nav className="navbar">
        <ul className="footer-nav">

          <li className="footer-item envelope">
          <a href="mailto:walidsabhi99@gmail.com">
            <FontAwesomeIcon icon={faEnvelope} />
            </a>
          </li>
        </ul>
      </nav>
    </footer>
  );
}

export default Footer;
