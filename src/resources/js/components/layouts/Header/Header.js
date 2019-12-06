import React from 'react';
import Logo from '../../elements/Logo/Logo';
import CityPicker from '../../elements/CityPicker/CityPicker';
import SearchField from '../../elements/SearchField/SearchField'
import ServiceSelector from '../../elements/ServiceSelector/ServiceSelector'

const Header = () => {
  return (
    <header className="header">
      <Logo />
      <CityPicker />
      <SearchField />
      <ServiceSelector
        label="Підгрупа медичних послуг"
        options={[
          { text: 'Підгрупа 1', value: 'Підгрупа 1' },
          { text: 'Підгрупа 2', value: 'Підгрупа 2' },
        ]}
      />
      <ServiceSelector
        label="Вид медичних послуг"
        options={[
          { text: 'Вид 1', value: 'Вид 1' },
          { text: 'Вид 2', value: 'Вид 2' },
        ]}
      />
      <ServiceSelector
        label="Графік роботи"
        options={[
          { text: 'Пн-Пт', value: 'Пн-Пт' },
          { text: 'Пн-Нд', value: 'Пн-Нд' },
        ]}
      />
    </header>
  );
};

export default Header;
