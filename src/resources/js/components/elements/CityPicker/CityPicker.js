import React, { Component } from 'react';
import { connect } from 'react-redux';
import CityPickerView from './CityPickerView';

class CityPicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      city: {
        text: 'Кропивницький',
        value: 'Кропивницький',
        selected: true,
      },
    };
  }

  onCityChanged = (event, { value }) => {
    const { cities } = this.props;
    this.setState({
      city: cities.find((city) => city.value === value),
    });
  };

  render() {
    const { city } = this.state;
    let { cities } = this.props;
    if (!cities.length) {
      cities = [{ ...city }];
    } else {
      cities[0].selected = true;
    }
    return (
      <CityPickerView
        city={city}
        cities={cities}
        onCityChanged={this.onCityChanged}
      />
    );
  }
}

const mapStateToProps = (state) => ({
  cities: state.availableFilters.address_locality,
});

export default connect(mapStateToProps)(CityPicker);
