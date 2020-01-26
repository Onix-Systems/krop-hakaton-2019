import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Logo from '../../elements/Logo/Logo';
import CityPicker from '../../elements/CityPicker/CityPicker';
import SearchField from '../../elements/SearchField/SearchField';
import ServiceSelector from '../../elements/ServiceSelector/ServiceSelector';
import fetchAvailableFiltersAction from '../../../redux/thunks/availableFilters';
import { createSearchStringFromProps, mapQueryStringParamToProp } from '../../../helpers';

class Header extends Component {
  componentDidMount() {
    const { fetchAvailableFilters } = this.props;
    fetchAvailableFilters();
  }

  onSubgroupChanged = (event, { value }) => {
    const { history, location } = this.props;
    const searchString = createSearchStringFromProps(location.search, {
      diagnostic_subgroup: value,
    });
    history.push(searchString);
  };

  onTypeChanged = (event, { value }) => {
    const { history, location } = this.props;
    const searchString = createSearchStringFromProps(location.search, {
      diagnostic_type: value,
    });
    history.push(searchString);
  };

  onScheduleChanged = (event, { value }) => {
    const { history, location } = this.props;
    const searchString = createSearchStringFromProps(location.search, {
      work_schedule: value,
    });
    history.push(searchString);
  };

  render() {
    const {subgroups, types, schedule, location} = this.props;

    const diagnosticSubgroup = mapQueryStringParamToProp(
      location.search,
      'diagnostic_subgroup',
      '',
    );

    const diagnosticType = mapQueryStringParamToProp(
      location.search,
      'diagnostic_type',
      '',
    );

    const workSchedule = mapQueryStringParamToProp(
      location.search,
      'work_schedule',
      '',
    );

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
          />
          <div className="header__divider" />
          <ServiceSelector
            label="Вид мед. послуг"
            value={diagnosticType}
            options={types}
            onServiceChanged={this.onTypeChanged}
          />
          <div className="header__divider" />
          <ServiceSelector
            label="Графік роботи"
            value={workSchedule}
            options={schedule}
            onServiceChanged={this.onScheduleChanged}
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
});

const mapDispatchToProps = {
  fetchAvailableFilters: fetchAvailableFiltersAction,
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Header),
);
