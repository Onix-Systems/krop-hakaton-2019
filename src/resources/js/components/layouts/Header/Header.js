import React, { Component } from 'react';
import { connect } from 'react-redux';
import Logo from '../../elements/Logo/Logo';
import CityPicker from '../../elements/CityPicker/CityPicker';
import SearchField from '../../elements/SearchField/SearchField';
import ServiceSelector from '../../elements/ServiceSelector/ServiceSelector';
import { bindActionCreators } from 'redux';
import filterAction from '../../actions/filters';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      diagnostic_subgroup: {text: '', value: ''},
      diagnostic_type: {text: '', value: ''},
      work_shedule: {text: '', value: ''},
    };
  }

  onSubgroupChanged = (event, { value }) => {
    const { subgroups, filter } = this.props;
    filter({ filterType: 'diagnostic_subgroup', value });
    this.setState({
      value: subgroups.find((value) => value.value === value),
    });
  };

  onTypeChanged = (event, { value }) => {
    const { types, filter } = this.props;
    filter({ filterType: 'diagnostic_type', value });
    this.setState({
      value: types.find((value) => value.value === value),
    });
  };

  onScheduleChanged = (event, { value }) => {
    const { shedule, filter } = this.props;
    filter({ filterType: 'work_shedule', value });
    this.setState({
      value: shedule.find((value) => value.value === value),
    });
  };

  render() {
    const {
      subgroups,
      types,
      shedule,
    } = this.props;
    const {
      diagnostic_subgroup,
      diagnostic_type,
      work_shedule,
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
            value={diagnostic_subgroup}
            options={subgroups}
            onServiceChanged={this.onSubgroupChanged}
          />
          <div className="header__divider" />
          <ServiceSelector
            label="Вид мед. послуг"
            value={diagnostic_type}
            options={types}
            onServiceChanged={this.onTypeChanged}
          />
          <div className="header__divider" />
          <ServiceSelector
            label="Графік роботи"
            value={work_shedule}
            options={shedule}
            onServiceChanged={this.onScheduleChanged}
          />
        </div>
      </div>
    );
  };
}

const mapStateToProps = (state) => ({
  subgroups: state.availableFilters.diagnostic_subgroup,
  types: state.availableFilters.diagnostic_type,
  shedule: state.availableFilters.work_shedule,
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  filter: filterAction,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Header);
