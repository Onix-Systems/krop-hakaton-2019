import React, { Component } from 'react';
import { connect } from 'react-redux';
import CityPickerView from './CityPickerView';
import {filterEquipments} from '../../../redux/asyncActions/equipments';

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
    const { filters } = this.props;
    const { city } = this.state;
    this.props.filterEquipments({ name: 'address_locality', value }, filters);
    this.setState({
      city: {
        ...city,
        text: value,
        value,
      },
    });
  };

  render() {
    const { city } = this.state;
    let { cities, isLoading } = this.props;
    if (!cities.length) {
      cities = [{ ...city }];
    } else {
      cities[0].selected = true;
    }
    return (
      <CityPickerView
        city={city}
        cities={cities}
        disabled={isLoading}
        onCityChanged={this.onCityChanged}
      />
    );
  }
}

const mapStateToProps = (state) => ({
  cities: state.availableFilters.address_locality,
  filters: state.filters,
  isLoading: state.equipments.fetching,
});

const mapDispatchToProps = {
  filterEquipments,
};

export default connect(mapStateToProps, mapDispatchToProps)(CityPicker);
