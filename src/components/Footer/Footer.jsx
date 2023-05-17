// import React, { useState } from "react";

// const Footer = () => {
//   return (
//     <>
//       <div className="footer  d-flex align-items-center ">
      
//         <div className=" fs-16 fw-600"> Contact Us</div>
//       </div>
//     </>
//   );
// };

// export default Footer

import React from 'react';
import './Footer.css';
import { FaInstagram, FaLinkedin, FaFacebook, FaTelegram } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="footer">
      <div className="contact-us">Contact Us</div>
      <div className="social-icons">
        <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
        <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
        <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
        <a href="https://telegram.org/" target="_blank" rel="noopener noreferrer"><FaTelegram /></a>
      </div>
      <div className="copyright">
        Copyright © 2023 🇮​​🇳​​🇹​​🇪​​🇷​​🇳​​🇪​​🇦​​🇸​​🇪​. 
        All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
