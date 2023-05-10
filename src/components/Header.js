import React from 'react';
import Logo from '../assets/bleach.png';

export default function Header() {
  return (
    <div className="header">
      <img src={Logo} alt="Bleach" id="header" />
    </div>
  );
}
