import React from 'react';
import { connect } from 'react-redux';
import Logo from '../../elements/Logo/Logo';
import CityPicker from '../../elements/CityPicker/CityPicker';
import SearchField from '../../elements/SearchField/SearchField';
import ServiceSelector from '../../elements/ServiceSelector/ServiceSelector';

const Header = ({
  diagnostic_subgroup,
  diagnostic_type,
  work_shedule,
}) => {
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
          options={diagnostic_subgroup}
        />
        <div className="header__divider" />
        <ServiceSelector
          label="Вид мед. послуг"
          options={diagnostic_type}
        />
        <div className="header__divider" />
        <ServiceSelector
          label="Графік роботи"
          options={work_shedule}
        />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  diagnostic_subgroup: state.availableFilters.diagnostic_subgroup,
  diagnostic_type: state.availableFilters.diagnostic_type,
  work_shedule: state.availableFilters.work_shedule,
});


export default connect(mapStateToProps)(Header);
