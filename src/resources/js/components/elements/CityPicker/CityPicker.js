import React, { Component } from 'react';
import { connect } from 'react-redux';
import CityPickerView from './CityPickerView';
import applyFilterToEquipmentsAction from '../../../redux/thunks/filters';
import { mapFilterToDropdownProp } from '../../../helpers';

class CityPicker extends Component {
  onCityChanged = (event, { value }) => {
    const { applyFilterToEquipments } = this.props;
    applyFilterToEquipments('address_locality', value);
  };

  render() {
    let { cities, currentCity, loading } = this.props;
    return (
      <CityPickerView
        city={currentCity}
        cities={cities}
        disabled={loading}
        onCityChanged={this.onCityChanged}
      />
    );
  }
}

const mapStateToProps = (state) => ({
  cities: state.availableFilters.address_locality,
  currentCity: mapFilterToDropdownProp(state.filters.address_locality),
  loading: state.loading,
});

const mapDispatchToProps = {
  applyFilterToEquipments: applyFilterToEquipmentsAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(CityPicker);
