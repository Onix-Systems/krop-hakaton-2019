import React, { Component } from 'react';
import CityPickerView from './CityPickerView';

class CityPicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cities: [ // todo move to redux and api call
        {
          text: 'Кропивницький',
          value: 1,
          selected: true,
        },
        {
          text: 'с. Нове',
          value: 2,
          selected: false,
        },
      ],
      city: {
        text: 'Кропивницький',
        value: 1,
        selected: true,
      },
    };
  }

  onCityChanged = (event, { value }) => {
    const { cities } = this.state;
    this.setState({
      city: cities.find((city) => city.value === value),
    });
  };

  render() {
    const { city, cities } = this.state;
    return (
      <CityPickerView
        city={city}
        cities={cities}
        onCityChanged={this.onCityChanged}
      />
    );
  }
}

export default CityPicker;
