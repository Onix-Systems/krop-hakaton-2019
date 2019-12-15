import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Logo from '../../elements/Logo/Logo';
import CityPicker from '../../elements/CityPicker/CityPicker';
import SearchField from '../../elements/SearchField/SearchField';
import ServiceSelector from '../../elements/ServiceSelector/ServiceSelector';
import filterAction from '../../../redux/actionCreators/filters';

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

  onSubgroupChanged = (event, { value }) => {
    const { filter } = this.props;
    const { diagnosticSubgroup } = this.state;
    filter({ filterType: 'diagnostic_subgroup', value });
    this.setState({
      diagnosticSubgroup: {
        ...diagnosticSubgroup,
        text: value,
        value,
      },
    });
  };

  onTypeChanged = (event, { value }) => {
    const { filter } = this.props;
    const { diagnosticType } = this.state;
    filter({ filterType: 'diagnostic_type', value });
    this.setState({
      diagnosticType: {
        ...diagnosticType,
        text: value,
        value,
      },
    });
  };

  onScheduleChanged = (event, { value }) => {
    const { filter } = this.props;
    const { workSchedule } = this.state;
    filter({ filterType: 'work_shedule', value });
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
    } = this.props;
    const {
      diagnosticSubgroup,
      diagnosticType,
      workSchedule,
    } = this.state;

    return (
      <div className="header container-fluid">
        <div className="col-1">
          <Logo />
        </div>
        <div className="col-2">
          <CityPicker />
        </div>
        <div className="col-3">
          <SearchField />
        </div>
        <div className="col-6 header__services">
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
  schedule: state.availableFilters.work_shedule,
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  filter: filterAction,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Header);
