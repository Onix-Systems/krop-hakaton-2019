import React from 'react';
import { Dropdown, Icon } from 'semantic-ui-react';
import MarkerIcon from '../../../../images/svg/location-pin.svg';

const CityPickerView = ({
  city, cities, onCityChanged, disabled
}) => (
  <div className="city-picker">
    <img src={MarkerIcon} className="city-picker__marker" alt="pin" />
    <Dropdown
      icon={(
        <span className="city-picker__dropdown-icon">
          <Icon name="angle down" />
        </span>
      )}
      value={city.value}
      options={cities}
      onChange={onCityChanged}
      disabled={disabled}
      className="city-picker__dropdown"
    />
  </div>
);

export default CityPickerView;
