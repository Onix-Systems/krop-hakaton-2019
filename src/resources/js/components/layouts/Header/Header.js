import React, { Component } from 'react';
import { connect } from 'react-redux';
import Logo from '../../elements/Logo/Logo';
import CityPicker from '../../elements/CityPicker/CityPicker';
import SearchField from '../../elements/SearchField/SearchField';
import ServiceSelector from '../../elements/ServiceSelector/ServiceSelector';
import fetchAvailableFiltersAction from '../../../redux/asyncActions/filters'
import { filterEquipments } from '../../../redux/asyncActions/equipments';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      diagnosticSubgroup: {
        text: '',
        value: '',
        selected: true,
      },
      diagnosticType: {
        text: '',
        value: '',
        selected: true,
      },
      workSchedule: {
        text: '',
        value: '',
        selected: true,
      },
    };
  }

  componentDidMount() {
    const { fetchAvailableFilters } = this.props;
    fetchAvailableFilters();
  }

  onSubgroupChanged = (event, { value }) => {
    const { filters } = this.props;
    const { diagnosticSubgroup } = this.state;
    this.props.filterEquipments({ name: 'diagnostic_subgroup', value }, filters);
    this.setState({
      diagnosticSubgroup: {
        ...diagnosticSubgroup,
        text: value,
        value,
      },
    });
  };

  onTypeChanged = (event, { value }) => {
    const { filters } = this.props;
    const { diagnosticType } = this.state;
    this.props.filterEquipments({ name: 'diagnostic_type', value }, filters);
    this.setState({
      diagnosticType: {
        ...diagnosticType,
        text: value,
        value,
      },
    });
  };

  onScheduleChanged = (event, { value }) => {
    const { filters } = this.props;
    const { workSchedule } = this.state;
    this.props.filterEquipments({ name: 'work_schedule', value }, filters);
    this.setState({
      workSchedule: {
        ...workSchedule,
        text: value,
        value,
      },
    });
  };

  render() {
    const {
      subgroups,
      types,
      schedule,
      isLoading
    } = this.props;
    const {
      diagnosticSubgroup,
      diagnosticType,
      workSchedule,
    } = this.state;

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
            disabled={isLoading}
          />
          <div className="header__divider" />
          <ServiceSelector
            label="Вид мед. послуг"
            value={diagnosticType}
            options={types}
            onServiceChanged={this.onTypeChanged}
            disabled={isLoading}
          />
          <div className="header__divider" />
          <ServiceSelector
            label="Графік роботи"
            value={workSchedule}
            options={schedule}
            onServiceChanged={this.onScheduleChanged}
            disabled={isLoading}
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
  filters: state.filters,
  isLoading: state.equipments.fetching,
});

const mapDispatchToProps = {
  fetchAvailableFilters: fetchAvailableFiltersAction,
  filterEquipments,
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
