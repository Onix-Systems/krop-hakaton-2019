import React from 'react';
import { Dropdown, Icon } from 'semantic-ui-react';
import MarkerIcon from '../../../../svg/location-pin.svg';

const CityPickerView = ({
  city, cities, onCityChanged,
}) => (
  <div className="city-picker">
    <Icon name="map marker alternate" />
    <Dropdown
      icon={(
        <span className="city-picker__dropdown-icon">
          <Icon name="angle down" />
        </span>
      )}
      value={city.value}
      options={cities}
      onChange={onCityChanged}
      className="city-picker__dropdown"
    />
  </div>
);

export default CityPickerView;
