import React from 'react';
import { Dropdown } from 'semantic-ui-react';

const CityPickerView = ({
  city, cities, onCityChanged
}) => (
  <div className="city-picker">
    <Dropdown
      value={city.value}
      options={cities}
      onChange={onCityChanged}
    />
  </div>
);


export default CityPickerView;
