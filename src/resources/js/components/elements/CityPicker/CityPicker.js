import React, { Component } from 'react';
import { connect } from 'react-redux';
import CityPickerView from './CityPickerView';
import applyFiltersToEquipmentsAction from '../../../redux/thunks/filters';
import { mapFilterToDropdownProp } from '../../../helpers';

class CityPicker extends Component {
  onCityChanged = (event, { value }) => {
    const { applyFiltersToEquipments } = this.props;
    applyFiltersToEquipments({ address_locality: value });
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
  applyFiltersToEquipments: applyFiltersToEquipmentsAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(CityPicker);
