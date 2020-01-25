import React, { Component } from 'react';
import { connect } from 'react-redux';
import Logo from '../../elements/Logo/Logo';
import CityPicker from '../../elements/CityPicker/CityPicker';
import SearchField from '../../elements/SearchField/SearchField';
import ServiceSelector from '../../elements/ServiceSelector/ServiceSelector';
import fetchAvailableFiltersAction from '../../../redux/thunks/availableFilters';
import applyFilterToEquipmentsAction from '../../../redux/thunks/filters'
import { mapFilterToDropdownProp } from '../../../helpers'

class Header extends Component {
  componentDidMount() {
    const { fetchAvailableFilters } = this.props;
    fetchAvailableFilters();
  }

  onSubgroupChanged = (event, { value }) => {
    const { applyFilterToEquipments } = this.props;
    applyFilterToEquipments('diagnostic_subgroup', value);
  };

  onTypeChanged = (event, { value }) => {
    const { applyFilterToEquipments } = this.props;
    applyFilterToEquipments('diagnostic_type', value);
  };

  onScheduleChanged = (event, { value }) => {
    const { applyFilterToEquipments } = this.props;
    applyFilterToEquipments('work_schedule', value);
  };

  render() {
    const {
      subgroups,
      types,
      schedule,
      loading,
      diagnosticSubgroup,
      diagnosticType,
      workSchedule,
    } = this.props;

    return (
      <div className="header container-fluid">
        <div className="col-lg-1 col-sm-6 header__logo">
          <Logo />
        </div>
        <div className="col-lg-2 col-sm-6 header__location">
          <CityPicker />
        </div>
        <div className="col-lg-3 col-sm-12 header__search">
          <SearchField />
        </div>
        <div className="col-lg-6 col-sm-12 header__services">
          <ServiceSelector
            label="Підгрупа мед. послуг"
            value={diagnosticSubgroup}
            options={subgroups}
            onServiceChanged={this.onSubgroupChanged}
            disabled={loading}
          />
          <div className="header__divider" />
          <ServiceSelector
            label="Вид мед. послуг"
            value={diagnosticType}
            options={types}
            onServiceChanged={this.onTypeChanged}
            disabled={loading}
          />
          <div className="header__divider" />
          <ServiceSelector
            label="Графік роботи"
            value={workSchedule}
            options={schedule}
            onServiceChanged={this.onScheduleChanged}
            disabled={loading}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  subgroups: state.availableFilters.diagnostic_subgroup,
  types: state.availableFilters.diagnostic_type,
  schedule: state.availableFilters.work_schedule,
  loading: state.loading,
  diagnosticSubgroup: mapFilterToDropdownProp(state.filters.diagnostic_subgroup),
  diagnosticType: mapFilterToDropdownProp(state.filters.diagnostic_type),
  workSchedule: mapFilterToDropdownProp(state.filters.work_schedule),
});

const mapDispatchToProps = {
  fetchAvailableFilters: fetchAvailableFiltersAction,
  applyFilterToEquipments: applyFilterToEquipmentsAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
