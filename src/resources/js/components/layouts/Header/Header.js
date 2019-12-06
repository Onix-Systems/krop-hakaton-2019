import React from 'react';
import Logo from '../../elements/Logo/Logo';
import CityPicker from '../../elements/CityPicker/CityPicker';

const Header = () => {
  return (
    <header className="header">
      <Logo />
      <CityPicker />
    </header>
  );
};

export default Header;
