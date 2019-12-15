import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import CityPickerView from './CityPickerView';
import filterEquipmentsAction from '../../../redux/asyncActions/equipments';

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
    const { filter, filters } = this.props;
    const { city } = this.state;
    filter({ name: 'address_locality', value }, filters);
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
  filters: state.filters,
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  filter: filterEquipmentsAction,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(CityPicker);
