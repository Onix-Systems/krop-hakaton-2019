import React from 'react';
import { connect } from 'react-redux';
import MapView from './MapView';
import { mapEquipmentsToPoints } from '../../../helpers';

const Map = ({
  selectedEquipment, hide, points, center,
}) => {
  return (
    <MapView
      hide={hide}
      points={points}
      center={center}
      selectedEquipment={selectedEquipment}
    />
  );
};

const mapStateToProps = (state) => ({
  selectedEquipment: state.equipments.selected,
  hide: state.resize.laptopOrSmallerScreen && !state.map,
  ...mapEquipmentsToPoints(state.equipments.filtered),
});

export default connect(mapStateToProps)(Map);
