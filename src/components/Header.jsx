import React from 'react';
import logo from '../assets/panduh-logo.png';

const Header = () => {
  return ( 
    <header id="header">
      <img src={logo} alt="logo"/>
      <h1>panduh</h1>
    </header>
   );
}
 
export default Header;