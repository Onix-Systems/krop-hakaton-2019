import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import CityPickerView from './CityPickerView';
import { createSearchStringFromProps, mapQueryStringParamToProp } from '../../../helpers';

class CityPicker extends Component {
  onCityChanged = (event, { value }) => {
    const { history, location } = this.props;
    const searchString = createSearchStringFromProps(location.search, {
      address_locality: value,
      page: 1,
    });
    history.push(searchString);
  };

  render() {
    let { cities, loading, selectedEquipment, location } = this.props;
    const currentCity = mapQueryStringParamToProp(
      location.search,
      'address_locality',
      'Кропивницький',
    );
    return (
      <CityPickerView
        city={currentCity}
        cities={cities}
        disabled={loading || selectedEquipment}
        onCityChanged={this.onCityChanged}
      />
    );
  }
}

const mapStateToProps = (state) => ({
  cities: state.availableFilters.address_locality,
  selectedEquipment: !!state.equipments.selected,
  loading: state.loading,
});

export default withRouter(
  connect(mapStateToProps)(CityPicker),
);
