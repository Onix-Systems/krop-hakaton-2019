import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import CityPickerView from './CityPickerView';
import filterAction from '../../../redux/actionCreators/filters';

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
    const { cities, filter } = this.props;
    filter({ filterType: 'address_locality', value });
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

const mapDispatchToProps = (dispatch) => bindActionCreators({
  filter: filterAction,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(CityPicker);
