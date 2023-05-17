// import React, { useState } from "react";

// const Header = () => {
//   return (
//     <>
//       <div className="header d-flex align-items-center ">
//         <img src ="../../assets/images/logo4.png" width="200px"></img>
//         {/* <div className="white fs-16 fw-600" > Contact Us</div> */}
//       </div>
//     </>
//   );
// };

// export default Header

import React from 'react';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="left">​🇮​​🇳​​🇹​​🇪​​🇷​​🇳​​🇪​​🇦​​🇸​​🇪​</div>
      <div className="right"><button className="apply-now">Apply Now</button></div>
    </header>
  );
}

export default Header;
