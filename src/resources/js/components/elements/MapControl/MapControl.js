import React from 'react';
import { connect } from 'react-redux';
import MapControlPin from '../../../../images/svg/map-control-pin.svg';
import MapControlClose from '../../../../images/svg/map-control-close.svg';
import { toggleMap as toggleMapAction } from '../../../redux/actions/map';

const MapControl = ({opened, toggleMap}) => {
  return (
    <div className="map-control" onClick={toggleMap}>
      {opened ? (
        <img className="map-control__close" src={MapControlClose} alt="close" />
      ) : (
        <img className="map-control__pin" src={MapControlPin} alt="pin" />
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  opened: state.map,
});

const mapDispatchToProps = {
  toggleMap: toggleMapAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(MapControl);
