import React from 'react';
import Logo from '../../elements/Logo/Logo';
import CityPicker from '../../elements/CityPicker/CityPicker';
import SearchField from '../../elements/SearchField/SearchField';
import ServiceSelector from '../../elements/ServiceSelector/ServiceSelector';

const Header = () => {
  return (
    <div className="header container-fluid">
      <div className="col-1">
        <Logo />
      </div>
      <div className="col-2">
        <CityPicker />
      </div>
      <div className="col-3">
        <SearchField />
      </div>
      <div className="col-6 header__services">
        <ServiceSelector
          label="Підгрупа мед. послуг"
          options={[
            { text: 'Підгрупа 1', value: 'Підгрупа 1' },
            { text: 'Підгрупа 2', value: 'Підгрупа 2' },
          ]}
        />
        <div className="header__divider" />
        <ServiceSelector
          label="Вид мед. послуг"
          options={[
            { text: 'Вид 1', value: 'Вид 1' },
            { text: 'Вид 2', value: 'Вид 2' },
          ]}
        />
        <div className="header__divider" />
        <ServiceSelector
          label="Графік роботи"
          options={[
            { text: 'Пн-Пт', value: 'Пн-Пт' },
            { text: 'Пн-Нд', value: 'Пн-Нд' },
          ]}
        />
      </div>
    </div>
  );
};

export default Header;
